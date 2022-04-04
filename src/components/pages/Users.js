import React, { useEffect, useState } from "react"; 
const Users = () => {
    const [Users,setUsers] = useState([]);
    
    useEffect(()=>{
        fetch('/api/users')
        .then(response => {
            return response.json()
        })
        .then(data => {
            setUsers(data.users.data)
        })
        
    },[]);


    return ( 
        <div className="gridUserContPage">
            <div className="gridUserTitleUserPage">
                Lista de usuarios registrados
            </div>
            <div className="gridUserItemPage gridUserItemPageSubtitle">
                <div>ID</div>
                <div>Nombre</div>
                <div>Apellido</div>
                <div>Email</div>
            </div>
            {Users.length === 0 ? "cargando..." : null}
            { Users.map((user,i) =>{
                return (
                    <div key={user.first_name+i} className="gridUserItemPage">
                        <div>{user.id}</div>
                        <div>{user.first_name}</div>
                        <div>{user.last_name}</div>
                        <div>{user.email}</div>
                    </div>
                )
                })
            }
        </div>
    );
}
 
export default Users;