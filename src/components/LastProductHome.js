import React,{useEffect, useState} from "react";

const LastProductHome = () => {

    const [product1,setVariableActualizaProduct1] = useState([])
    useEffect(()=>{
             fetch('/api/products/lastProduct')
             .then(response=>response.json())
             .then(data=> setVariableActualizaProduct1(data.data))
    }, [])
    console.log(product1)

    return ( 
        <React.Fragment>
            <div className="cardMorePrinImage">
                <img src={product1.imagen} alt="imagen de product" />
            </div>
            <div className="cardMorePrinTitleProduct">{product1.name}</div>
            <a href={product1.url} rel="noreferrer" target="_blank"><div className="btnDashboard">Mas info</div></a>
        </React.Fragment>
     );
}
 
export default LastProductHome;