const io = require('socket.io')(3000)
const users = {}

io.on('connection', socket => {
    // console.log('new User')
    // socket.emit('chat-message', 'hello world')
    socket.on('new-user', name => {
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', message)
        // console.log(message)
    })
})
