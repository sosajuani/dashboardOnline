import React, { useEffect, useState } from 'react'
import InfoPrin from "../InfoPrin";
const Panels = () => {
    const [usersCard,SetUsersCard] = useState([]);

    const [productsCard,SetProductsCard] = useState([]);

    const [categoriesCard,SetCategoriesCardCard] = useState([]);

    useEffect(()=>{
        fetch('/api/users')
        .then(response => response.json())
        .then(data => SetUsersCard(data.count))
    },[usersCard])

    useEffect(()=>{
        fetch('/api/products')
        .then(response => response.json())
        .then(data => SetProductsCard(data.count))
    },[productsCard])

    useEffect(()=>{
        fetch('/api/categories')
        .then(response => response.json())
        .then(data => SetCategoriesCardCard(data.count))
    },[categoriesCard])
    return (
        <div className="contInfoPrin">
            <InfoPrin title="Usuarios registrados" numbers={usersCard} />
            <InfoPrin title="Productos registrados" numbers={productsCard} />
            <InfoPrin title="Categorías registradas" numbers={categoriesCard} />
        </div>
    )
}

export default Panels