import React from 'react'
import {Link} from 'react-router-dom'
import Clients from "./Clients"
import Editor from "./Editor"

export default function EditorPage() {
  const [clients, setClients] = React.useState([
    {Id: 1, userName: 'John doe'},
    {Id: 2, userName: 'Krish'}
   ]);
   const clientElements = clients.map((client)=>(
    <Clients 
    key={client.Id}
    userName = {client.userName}
    />
   ))
    
  return(
   <div className="mainWrap">
    <div className="aside">
      <div className="inner-aside">
        <div className="logo">
          <img
          className='logoImg' 
          src="/images/dwnld2.jpeg" 
          alt="logo" />
        </div>
        <div className="clientList">
            {clientElements}
        </div>
      </div>
    <Link to=".."
     relative='path'
    >
      <button className='btn'>Leave</button>
    </Link>
    </div>
      <div className="textWrap"><Editor/></div>
   </div>
   
  )
}
