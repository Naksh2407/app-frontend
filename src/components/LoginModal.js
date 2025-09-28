import React from 'react';

export default function LoginModal({ onClose }){
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e)=>e.stopPropagation()}>
        <h3>Login / Signup</h3>
        <input placeholder="Username or email" style={{width:'100%',padding:8,marginBottom:8}}/>
        <input placeholder="Password" type="password" style={{width:'100%',padding:8,marginBottom:8}}/>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:8}}>
          <button style={{background:'#1e3a8a',color:'white',padding:'8px 12px',borderRadius:6}}>Login</button>
          <button onClick={onClose} style={{padding:'8px 12px'}}>Close</button>
        </div>
        <p style={{fontSize:12,color:'#6b7280',marginTop:8}}>This popup is a UI placeholder. Integrate backend auth for real login.</p>
      </div>
    </div>
  );
}
