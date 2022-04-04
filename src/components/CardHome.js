import React from "react";

const CardHome = (props) => {
    return ( 
        <div className="cardMorePrinHome">
            <div className="cardMorePrinTitle">Último producto</div>
            {props.children}
        </div>
     );
}
 
export default CardHome;