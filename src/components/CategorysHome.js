import React, { useEffect, useState } from "react";

const CategoryHome = () => {
    
    const [estado, setEstado] = useState([])
    useEffect(()=>{
        fetch('/api/categories/products')
        .then(response => response.json())
        .then(data=> setEstado(data.productsCat.data))
    }, [])
    return ( 
        <div>
            <ul className="CardMorePrinCatUl">
                {/* {category.map((categoryItem,i) => <li key={i} className="CardMorePrinCatLi">{categoryItem.category}</li>)} */}
                {estado.map((item,i)=> <li key={i} className="CardMorePrinCatLi"><p>{item.category}</p><p>Productos: {item.productsCount}</p></li>)}
            </ul>
        </div>
     );
}
 
export default CategoryHome;