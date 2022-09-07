export default {
	async fetch(request, env) {
	  const { results } = await env.db.prepare(
		"SELECT * FROM todos"
	  ).all();
	  return Response.json(results);
	},
  };
  