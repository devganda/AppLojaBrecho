import React from "react";
import { Link } from "react-router-dom";
import Not_founPng from '../../img/not_found.png'
import { NotFounds } from "./styled";

const NotFound = ()=>{
    return(
        <NotFounds>
            <div className="container">
                <div className="div-image">
                    <img src={Not_founPng} alt="Imagem 404"/>
                </div>
                Página não encontrada!

                <Link to="/">Voltar para Home</Link>
            </div>
        </NotFounds>
    );
}

export default NotFound;