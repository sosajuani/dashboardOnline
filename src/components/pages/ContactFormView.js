import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ContactFormView = () => {
    let id = useParams().id
    const [message,setMessage] = useState({});
    
    // useEffect(()=>{

    // },[id])
    useEffect(()=>{
        const fetchData = async()=>{

            let consultMsg = await fetch(`/api/contact/${id}/view`)
            let msgJson = await consultMsg.json()
            setMessage(msgJson.message.data)

            if(msgJson.message.data.viewed === 0){
                console.log("me ejecuto porque vista es 0")
                const resquestInit = {
                    method: "POST",
                    headers:{
                        "Access-Control-Allow-Origin":"*",
                        "Content-Type": "application/json",
                        "Accept": "*/*"
                    },
                    body: JSON.stringify({viewed:1})
                }
                let fetchConsultView = await fetch(`/api/contact/${id}/view`, resquestInit)
                await fetchConsultView.json();
                setMarcarLeido(false)
            }else{}
        }
        fetchData()
    },[id]);
    const [marcarLeido,setMarcarLeido] = useState(false);
    const noLeido = ()=>{
        const resquestInit = {
            method: "POST",
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({viewed:1})
        }       
        fetch(`/api/contact/${id}/view/old`,resquestInit)
        .then(response=> response.json())
        .then(data=> console.log(data))
        setMarcarLeido(true)
    }
    
    console.log(message);
    return (
        <section className='contactPage'>
        <div className='titleContactPage'>Nombre: {message.name}</div>
        <div className='titleContactPage'>Email: {message.email}</div>
        <div className='titleContactPage messageViewCont'>
            <div>Mensaje:</div>
            <p>
                {message.message}
            </p>
            {message.viewed === 1 || marcarLeido === false ? <div onClick={noLeido} className={marcarLeido === true ? ' animate__animated animate__bounceOutLeft btnDashboard' : 'btnDashboard'}>Marcado como no leído</div> : null}
        </div>
        </section>
    )
}

export default ContactFormView