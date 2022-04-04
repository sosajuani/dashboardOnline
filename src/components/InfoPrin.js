import React from "react";

const infoPrin = (props) => {
    return ( 
        <div className="infoPrin">
            <div>{props.title}</div>
            <div>{props.numbers}</div>
        </div>
    );
}
 
export default infoPrin;