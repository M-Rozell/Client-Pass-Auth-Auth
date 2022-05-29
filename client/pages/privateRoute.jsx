
import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { TOKEN_KEY } from "../services/api-service";


const PrivateRoute = () => {

    const TOKEN = localStorage.getItem(TOKEN_KEY);
    let location = useLocation()

    if (!TOKEN) {
        return (

            <Navigate to='./login' state={{ from: location }} />

        )
    } 
    return <Outlet />

}

export default PrivateRoute;