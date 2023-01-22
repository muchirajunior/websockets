const {WebSocketServer} = require('ws');
const PORT=8000;

const server=new WebSocketServer({port:PORT})

server.on('connection',(socket)=>{
    console.log("user connected");
    socket.send(JSON.stringify({type:"hello message"}))
})
