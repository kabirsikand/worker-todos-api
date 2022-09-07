export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const id = url.pathname.slice(1)
    const results = await env.db.prepare(
      "DELETE FROM todos WHERE id = ?1"
    ).bind(id).run();
    if (results.success) {
      return new Response("success", {status:200})
    }
    return Response.json(results);
  },
};
