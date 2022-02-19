import React from "react";
import { Navigate } from "react-router";
import { isLogged } from "../helpers/AuthHandler"; // verifica se está logado

const RouterHandler = ({children, ...rest})=>{
    let logged = isLogged();
    let authorized = (rest.private && !logged)? false:true;

    if(authorized){
        return children;
    }else{ 
        return <Navigate to="/signin" />
    }
}

export default RouterHandler;