import React from "react";
import HeaderTop from "./HeaderTop";
import Footer from "./Footer";
// import InfoPrin from "./InfoPrin";
// import CategoryHome from "./CategorysHome";
// import LastProductHome from "./LastProductHome";
// import CardHome from "./CardHome";
import { Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Users from "./pages/Users";
import NotFound from "./NotFound";
import '../asset/css/rightCont.css';
import '../asset/css/productStyle.css'
import Products from "./pages/Products";
import NewProduct from "./crud/NewProduct";
import EditProduct from "./crud/EditProduct";
import ContactForm from "./pages/ContactForm";
import ContactFormView from "./pages/ContactFormView";

function RightCont() {
  return (
    <div className="rightCont">
        <div className="contRightCont">
            <HeaderTop />
            
              
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/create" element={<NewProduct />} />
                  <Route path="/products/edit/:id" element={<EditProduct />} />
                  <Route path="/contact" element={<ContactForm />} />
                  <Route path="/contact/:id" element={<ContactFormView />} />
                  <Route component={<NotFound/>} />
                </Routes>
              
        </div>
        <Footer />
    </div>
  );
}

export default RightCont;
