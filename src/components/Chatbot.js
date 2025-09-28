import React, { useState } from 'react';

export default function Chatbot(){
  const [messages, setMessages] = useState([{ from:'bot', text:'Hi! Ask your school question.' }]);
  const [input, setInput] = useState('');
  const send = () => {
    if(!input) return;
    setMessages(m=>[...m,{from:'user',text:input},{from:'bot',text:'This feature is coming soon!'}]);
    setInput('');
  };
  return (
    <div className="chatbot" role="dialog">
      <div className="msgs">
        {messages.map((m,i)=> <div key={i}><b style={{textTransform:'capitalize'}}>{m.from}:</b> {m.text}</div>)}
      </div>
      <div className="input-row">
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message..." />
        <button onClick={send} style={{background:'#1e3a8a',color:'white',padding:'8px 10px',borderRadius:6}}>Send</button>
      </div>
    </div>
  );
}
