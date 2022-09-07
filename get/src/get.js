export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const id = url.pathname.slice(1)
    const { results } = await env.db.prepare(
      "SELECT * FROM todos WHERE id = ?1"
    ).bind(id).all();
    return Response.json(results[0]);
  },
};
