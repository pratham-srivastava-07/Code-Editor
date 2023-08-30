import React from 'react'
import Avatar from 'react-avatar'
export default function Clients(props) {
  return (
   <div className="container">
     <Avatar name = {props.userName} size={50} round = "14px"/>
    <span className='user'>{props.userName}</span>
   </div>
  )
}