export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const { todo, status } = await request.json()
    const results = await env.db.prepare(
      "INSERT INTO todos (todo, todoStatus) VALUES (?1, ?2)"
    ).bind(todo, status).run();
    if (results.success) {
      return new Response("success", {status:200})
    }
    return Response.json(results);
  },
};
