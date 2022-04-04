import React from 'react'

const ocultarMsg = (e)=>{
    console.log(e.target);
    e.target.classList.add("animate__zoomOutDown")
}

const MessageForm = (props) => {
  return (
    <div onClick={ocultarMsg} className={props.styles}>{props.msg}</div>
  )
}

export default MessageForm