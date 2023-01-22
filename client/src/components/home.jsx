import { useEffect } from 'react';
// import { w3cwebsocket } from 'websocket';
import { io } from 'socket.io-client';

export default function Home() {
const client=new io('http://localhost:8080')
useEffect(()=>{
    client.onopen=()=>{
        console.log("connect to ws server");
    };
},[])

  return (
    <div className='container p-3'>
        <button className='btn btn-primary'>send message</button>
    </div>
  )
}
