const ws = require('ws')

const webSocketServer = new ws.Server({
    port: 5000
}, () => console.log('Server Start'))

webSocketServer.on('connection', (ws) => {

    ws.on('message', (message) => {
        message = JSON.parse(message)
        console.log(message)

        switch(message.event) {
            case 'message':
                broadcastMessage(message)
                break
            case 'connection':
                console.log('User connnection')
                broadcastMessage(message)
                break
        }
    })

})

function broadcastMessage(message) {
    webSocketServer.clients.forEach(client => {
        client.send(JSON.stringify(message))
    })
}