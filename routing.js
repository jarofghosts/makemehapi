var Hapi = require('hapi')

var server = Hapi.createServer('localhost', process.argv[2])

server.route({
    method: 'GET'
  , path: '/{name}'
  , handler: helloName
})

server.start()

function helloName(request, reply) {
  reply('Hello ' + request.params.name)
}
