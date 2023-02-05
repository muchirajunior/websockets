const {WebSocketServer} = require('ws');
const PORT=8000;

const server=new WebSocketServer({port:PORT})

server.on('connection',(socket,req)=>{
    console.log("user connected");
    
    
    console.log(req.headers.origin);
    socket.on("message",(data)=>{   
        console.log(JSON.parse(data));
        let msg=JSON.parse(data);
        socket.send(JSON.stringify({message:"message recievced",data:msg}))
    })


    socket.send(JSON.stringify({message:"hello message"}))
})

