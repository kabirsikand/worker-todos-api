export default {
  async fetch(request, env) {
    try{
      const url = new URL(request.url)
      const idPattern = new URLPattern({ pathname: '/:id' })
      if (idPattern.test(request.url)) {
        switch (request.method){
          case 'GET':
            return await env.get.fetch(request.clone())
          case 'PATCH':
            return await env.update.fetch(request.clone())
          case 'DELETE':
            return await env.delete.fetch(request.clone())
          default:
            return new Response("Unsupported method for endpoint /:id", {status: 405})
        }
      } else if (url.pathname == '/') {
        switch (request.method){
          case 'GET':
            return await env.list.fetch(request.clone())
          case 'POST':
            return await env.create.fetch(request.clone())
          default:
            return new Response("Unsupported method for endpoint /", {status: 405})
        }
      }
      return new Response("Not found. Supported endpoints are /:id and /", {status: 404})
    } catch(e) {
      return new Response(e, {status: 500})
    }
  },
};
