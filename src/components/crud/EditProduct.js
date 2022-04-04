import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MessageForm from '../MessageForm'
import '../../asset/css/newProduct.css'

const EditProduct = () => {
    let id = useParams().id
    const [productEdit, setProductEdit]= useState([])
    const [categories,setCategories] = useState([])
    const [sizes, setSizes] = useState([])
    const [discount, setDiscount] = useState([])

    useEffect(()=>{
        fetch(`/api/products/${id}/detail`)
        .then(response => response.json())
        .then(data => setProductEdit(data.products.data))  
    },[id])

    useEffect(()=>{
        fetch("/api/categories")
        .then(response => response.json())
        .then(data => setCategories(data.categories.data))
    },[])

    useEffect(()=>{
        fetch("/api/sizes")
        .then(response => response.json())
        .then(data => setSizes(data.sizes.data))
    },[])
   
    useEffect(()=>{
        fetch('/api/discounts')
        .then(response => response.json())
        .then(data => setDiscount(data.discounts.data))
    },[])

    //cuando productEdit recibe los datos actualiza el formulario
    useEffect(()=>{
        setCreate({
            name: productEdit.name,
            price_inv: productEdit.price_inv,
            price_who: productEdit.price_who,
            stock: productEdit.stock,
            stock_min: productEdit.stock_min,
            stock_max: productEdit.stock_max,
            category: productEdit.categoryId,
            size: productEdit.sizeId,
            discount: productEdit.discountId,
            description: productEdit.description,
            visibility: productEdit.visibility,
        })
    },[productEdit])

    
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
            [e.target.name]: e.target.value,
        })
    }
    const [formMsg, setFormMsg] = useState({msg:""})
    const handleSubmit = (e)=>{
        e.preventDefault();
        const resquestInit = {
            method: "POST",
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(formCreate)
        }
        fetch(`/api/products/edit/${id}`, resquestInit)
        .then(response=> response.json())
        .then(data => console.log(data))
        .catch(e => setFormMsg({msg: e}))
        setFormMsg({msg: 'Producto editado correctamente'})
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
    <h1 className='titleForm'>Editar</h1>
    <form onSubmit={handleSubmit} className="createForm" encType="multipart/form-data">
        <input onChange={handleChange} defaultValue={productEdit.name} placeholder='Nombre' type="text" name='name' />
        <input onChange={handleChange} defaultValue={productEdit.price_inv} placeholder='price_inv' type="number" name='price_inv' />
        <input onChange={handleChange} defaultValue={productEdit.price_who} placeholder='price ' type="number" name='price_who' />
        <input onChange={handleChange} defaultValue={productEdit.stock} placeholder='stock' type="number" name='stock' />
        <input onChange={handleChange} defaultValue={productEdit.stock_min} placeholder='stock minimo' type="number" name='stock_min' />
        <input onChange={handleChange} defaultValue={productEdit.stock_max} placeholder='stock maximo' type="number" name='stock_max' />
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
        <textarea placeholder='Escribir descripción...' defaultValue={productEdit.name} onChange={handleChange} name='description'></textarea>
        <select onChange={handleChange} name="visibility" id="visibilityProduct" >
            <option value="1">Visible</option>
            <option value="0">No visible</option>
        </select>
        <input className='submitForm btnDashboard' type="submit" value="Editar producto" />
    </form>
    </React.Fragment>
  )
}

export default EditProduct