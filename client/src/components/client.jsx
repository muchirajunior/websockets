import { useState } from 'react';
import { client } from '../socket';

export default function Client() {
  const [messages,setMessages]=useState([])
  const sendMessage=()=>{
    client.send(JSON.stringify({message:document.getElementById('textmessage').value}));
  }



  client.onmessage=(message)=>{
    setMessages([...messages,message.data])
  }

  return (
    <div className='container bg-dark-subtle rounded p-2 m-2'>
      <div className='d-flex flex-row' style={{height:'50px'}}>
        <input type="text" id='textmessage' className='form-control me-2' onKeyDown={(event=>event.key==='Enter' ? sendMessage() :"")} />
        <button className='btn btn-secondary ' onClick={sendMessage} >send</button>
      </div>
      <ul className='list-group mt-3'>
          { messages.map((message)=> <li className='list-group-item'>{ message}</li> ) }
      </ul>
    </div>
  )
}
