import React from "react";
import {FooterArea} from './styled';

const Footer = () =>{
    return(
        <FooterArea>
            Todos os direitos reservados<br/>
            Brechó {new Date().getFullYear()} &#x2764;
        </FooterArea>
    );
}

export default Footer;