const wsserver=require('websocket');
const http=require('http')
const PORT=8000;

const server=http.createServer();
server.listen(PORT);
console.log('server running on port:'+PORT);

const socketserver=wsserver.server({
    port:PORT
})

socketserver.on('connect',(socket)=>{
    console.log('connected user :');
})