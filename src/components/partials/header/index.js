import React from "react";
import { Link } from "react-router-dom";
import {HeaderArea} from './styled';
import {isLogged, doLogout} from "../../../helpers/AuthHandler";

const Header = () =>{
    let logged = isLogged();
    const handleLogout = () =>{ // Sair, deslogando o usuário, removendo o token.
        doLogout();
        window.location.href = '/';
    }
    return(
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo-name">Brechó</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        
                        {logged && //Se tiver logado
                            <>
                                <li>
                                    <Link to="/my-account">Minha conta</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Sair</button>
                                </li>
                                <li>
                                    <Link to="/post-and-ad" className="poste-anuncio">Poste um anúncio</Link>
                                </li>
                            </>
                        }   

                        {!logged && //Se não tiver logado
                            <>
                               <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Cadastrar</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="poste-anuncio">Poste um anúncio</Link>
                                </li>
                            </> 
                        }
                        
                        
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;