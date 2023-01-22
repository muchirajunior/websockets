const io=require('socket.io')(8080,{
    cors:['*']
})

io.on('connection',(socket)=>{
    console.log(socket.id);
})