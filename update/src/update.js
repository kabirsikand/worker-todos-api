
function isEmpty(value){
  return (value == null || value === '');
}

async function updateRow(id, todo, status, env) {
  switch(true) {
    case !isEmpty(todo) && !isEmpty(status):
      return await env.db.prepare("UPDATE todos SET todo = ?2, todoStatus = ?3 WHERE id = ?1").bind(id, todo, status).run();
    case !isEmpty(todo) && isEmpty(status):
      return await env.db.prepare("UPDATE todos SET todo = ?2 WHERE id = ?1").bind(id, todo).run();
    case !isEmpty(status) && isEmpty(todo):
      return await env.db.prepare("UPDATE todos SET todoStatus = ?2 WHERE id = ?1").bind(id, status).run();
  }
  return await env.db.prepare("SELECT * FROM todos WHERE id = ?1").bind(id).first();
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const id = url.pathname.slice(1)
    const payload = await request.json()
    const updates = await updateRow(id, payload.todo, payload.status, env)
    if (updates.success) {
      return new Response("success", {status:200})
    }
    return Response.json(updates);
  }
};
