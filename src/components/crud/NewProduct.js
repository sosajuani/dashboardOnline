// import { json } from 'body-parser'
import React, { useEffect, useState } from 'react'
import '../../asset/css/newProduct.css'
import MessageForm from '../MessageForm'
const NewProduct = () => {

    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch("/api/categories")
        .then(response => response.json())
        .then(data => setCategories(data.categories.data))
    },[])

    const [sizes, setSizes] = useState([])

    useEffect(()=>{
        fetch("/api/sizes")
        .then(response => response.json())
        .then(data => setSizes(data.sizes.data))
    },[])


    const [discount, setDiscount] = useState([])
    useEffect(()=>{
        fetch('/api/discounts')
        .then(response => response.json())
        .then(data => setDiscount(data.discounts.data))
    },[])

    const [formCreate, setCreate] = useState({
        name: '',
        price_inv: '',
        price_who: '',
        stock: '',
        stock_min: '',
        stock_max: '',
        category: '',
        size: '',
        discount: '',
        description: '',
        visibility: ''
    })
    const handleChange = e =>{
        setCreate({
            ...formCreate,
            [e.target.name]: e.target.value
        })
    }

    const [formMsg, setFormMsg] = useState({msg:""})
    const handleSubmit = (e)=>{
       e.preventDefault()
        const resquestInit = {
            method: "POST",
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(formCreate)
        }
        fetch("/api/products/create", resquestInit)
        .then(response=> response.json())
        .then(data => console.log(data))
        .catch(e => setFormMsg({msg: e}))
        setFormMsg({msg: 'Producto creado correctamente'})
        setCreate({
            name: '',
            price_inv: '',
            price_who: '',
            stock: '',
            stock_min: '',
            stock_max: '',
            category: '',
            size: '',
            discount: '',
            description: '',
            visibility: ''
        })
    }

  return (
    <React.Fragment>
    {formMsg.msg === "" ? null : <MessageForm styles="successMsg messageForm animate__animated animate__zoomInUp" msg={formMsg.msg} />}
    <h1 className='titleForm'>Crear producto</h1>
    <form onSubmit={handleSubmit} className="createForm" >
        <input onChange={handleChange} placeholder='Nombre' type="text" name='name' />
        <input onChange={handleChange} placeholder='price_inv' type="number" name='price_inv' />
        <input onChange={handleChange} placeholder='price ' type="number" name='price_who' />
        <input onChange={handleChange} placeholder='stock' type="number" name='stock' />
        <input onChange={handleChange} placeholder='stock minimo' type="number" name='stock_min' />
        <input onChange={handleChange} placeholder='stock maximo' type="number" name='stock_max' />
        <select onChange={handleChange} name='category'>
            {categories.length === 0 ? <option>Cargando...</option> : null }
            {categories.map((category,i)=>{
                return(
                    <option value={category.id} key={category.name+i}>{category.name}</option>
                )
            })}
        </select>
        <select onChange={handleChange} name='size'>
        {sizes.length === 0 ? <option>Cargando...</option> : null }
            {sizes.map((sizes,i)=>{
                return(
                    <option value={sizes.id} key={sizes.size+i}>{sizes.size}</option>
                )
            })}
        </select>
        <select onChange={handleChange} name='discount'>
            {discount.length === 0 ? <option>Cargando...</option> : null }
            {discount.map((discount,i)=>{
                return(
                    <option value={discount.id} key={i}>{discount.discounts}%</option>
                )
            })}
        </select>
        
        <textarea placeholder='Escribir descripción...' onChange={handleChange} name='description'></textarea>
        <select onChange={handleChange} name="visibility" id="visibilityProduct" >
            <option value="1">Visible</option>
            <option value="0">No visible</option>
        </select>
        <input className='submitForm btnDashboard' type="submit" value="Crear producto" />
    </form>
    </React.Fragment>
  )
}

export default NewProduct