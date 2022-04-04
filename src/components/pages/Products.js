import React, { useEffect, useState } from "react"; 
import Modal from "../Modal";

const Products = () => {
    const [Products,setProducts] = useState([]);
    
    useEffect(()=>{
        fetch('api/products')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setProducts(data.products.data)
        })
        
    },[]);

    const [modal,setModal] = useState(false)
    const [productSelect,setProductSelect] = useState({
        id: ''
    })
    // let modalView = ()=>{
    //     setModal(true)
    // }
    let modalHidden = ()=>{
        setModal(false)
    }
    const modalDeleteConfirm = (id)=>{
        const resquestInit = {
            method: "DELETE",
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: null
        }
        fetch(`/api/products/delete/${id}`,resquestInit)
        .then(r => r.json())
        .then(d => console.log(d))
        
        setProducts(Products.filter(product => product.id !== id))
        setModal(false)
    }
    const selectProductModal = (element)=>{
        setProductSelect(element);
        setModal(true)
    }

    return (
        <React.Fragment> 
        {modal === false ? null : <Modal modelHidden={modalHidden} modelDelete={()=> modalDeleteConfirm(productSelect)} />}
        <div className="gridProductContPage">
            <div className="gridProductTitleProductPage">
                Lista de Productos
            </div>
            <div className="gridProductItemPage gridProductItemPageSubtitle">
                <div className="gridProductItemVisible">ID</div>
                <div className="gridProductItemVisible">Nombre</div>
                <div className="gridProductItemOculto">Precio Inividual</div>
                <div className="gridProductItemOculto">Precio Mayorista</div>
                <div className="gridProductItemOculto">Stock Maximo</div>
                <div className="gridProductItemOculto">Stock Minimo</div>
                <div className="gridProductItemOculto">Categoria</div>
                <div className="gridProductItemVisible">Editar</div>
                <div className="gridProductItemVisible">Eliminar</div>
            
            </div>
            {Products.length === 0 ? "cargando..." : null}
            { Products.map((product,i) =>{
                return (
                    <div key={product.name+i} className="gridProductItemPage">
                        <div className="gridProductItemId">{product.id}</div>
                        <div className="gridProductItemName">{product.name}</div>
                        <div className="gridProductItemOculto">{product.price_inv}</div>
                        <div className="gridProductItemOculto">{product.price_who}</div>
                        <div className="gridProductItemOculto">{product.stock_max}</div>
                        <div className="gridProductItemOculto">{product.stock_min}</div>
                        <div className="gridProductItemOculto">{product.category}</div>
                        <div className="gridProductItemVisible boton"> <a href={`/products/edit/${product.id}`}><button className="btnDashboard" type="button" ><i class="far fa-edit"></i></button></a></div>
                        <div className="gridProductItemVisible boton"><button onClick={()=> selectProductModal(product.id)} className="btnDashboard" type="button" ><i class="fas fa-trash-alt"></i></button></div>       
                    </div>
                )
                })
            }
        </div>
        </React.Fragment>
    );
}
// <div className="gridUserContPage">
// <div className="gridUserTitleUserPage">
//     Lista de usuarios registrados
// </div>
// <div className="gridUserItemPage gridUserItemPageSubtitle">
//     <div>ID</div>
//     <div>Nombre</div>
//     <div>Apellido</div>
//     <div>Email</div>
// </div>
// {Users.length === 0 ? "cargando..." : null}
// { Users.map((user,i) =>{
//     return (
//         <div key={user.first_name+i} className="gridUserItemPage">
//             <div>{user.id}</div>
//             <div>{user.first_name}</div>
//             <div>{user.last_name}</div>
//             <div>{user.email}</div>
//         </div>
//     )
//     })
// } */
// </div>
export default Products;