import React from "react"
import LastProductHome from "../LastProductHome";
import CategoryHome from "../CategorysHome";
import CardHome from "../CardHome";
import Panels from "./Panels";


const Home = () => {
    
    return ( 
        <React.Fragment>
            <Panels/>
            <div className="contMoreInfo">
                <CardHome>
                    <LastProductHome />
                </CardHome>
                <CardHome>
                    <CategoryHome />
                </CardHome>
            </div>
        </React.Fragment>
     );
}
 
export default Home;