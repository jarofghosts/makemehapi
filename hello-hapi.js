var Hapi = require('hapi')

var server = Hapi.createServer('localhost', process.argv[2])

server.route({
    method: 'GET'
  , path: '/'
  , handler: hello_world
})

server.start()

function hello_world(request, reply) {
  reply('Hello Hapi')
}
