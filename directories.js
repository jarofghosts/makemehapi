var Hapi = require('hapi')

var server = Hapi.createServer('localhost', process.argv[2])

server.route({
    method: 'GET'
  , path: '/foo/bar/baz/{derp}'
  , handler: {directory: {path: 'public'}}
})

server.start()
