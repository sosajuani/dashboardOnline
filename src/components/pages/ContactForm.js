import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../asset/css/contactPage.css'


const ContactForm = () => {
    const [listMessage, setListMessage] = useState([])
    
    useEffect(()=>{
       fetch('/api/contact')
       .then(response => response.json())
       .then(data => setListMessage(data.message.data))
    },[]) 
  return (
    <section className='contactPage'>
        <div className='titleContactPage'>Mensajes</div>
        <div className='msgCont'>
            {
                listMessage.map((message,i) =>{
                    return(
                        <Link key={i+message.name} to={`/contact/${message.id}`}>
                            <div className={message.viewed === 0 ? 'idMsgCont idMsgNew animate__animated' : 'idMsgCont animate__animated'}>
                                <div className='idMsg'>{message.id}</div>
                                <div>{message.name}</div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </section>
  )
}

export default ContactForm