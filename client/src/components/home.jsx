import { useEffect } from 'react';
import { w3cwebsocket } from 'websocket';

export default function Home() {
// const client= io('http://localhost:8080')
const client= new w3cwebsocket("ws://localhost:8000")
useEffect(()=>{
    client.onopen =(socket)=>{
        console.log('you are connected to server');
    }
},[])

  return (
    <div className='container p-3'>
        <button className='btn btn-primary'>send message</button>
    </div>
  )
}
