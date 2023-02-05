import { useEffect,useState } from 'react';
import { client } from '../socket';


export default function Home() {

const [messages,setMessages]=useState([])
useEffect(()=>{
    client.onopen=('connection', (socket)=>{
      console.log("connected to server");
      
    })
   
},[])

const sendMessage=()=>{

  client.send(JSON.stringify({message:"hello from client"}));

}

 client.onmessage=((message)=>{
  setMessages([...messages,JSON.parse(message.data)])
  console.log(message.data);
 })


  return (
    <div className='container p-3 bg-primary-subtle border border-primary-subtle rounded'>
        <button className='btn btn-primary' onClick={sendMessage}>send message</button>
        <ul class="list-group">
          { messages.map((message)=>  <li class="list-group-item">{message.message}</li>) }
         
          
        </ul>
    </div>
  )
}
