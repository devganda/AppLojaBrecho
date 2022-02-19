import React from "react";
import {Item} from './styled';
import { Link } from "react-router-dom";

const AdItem = ({data, heigth}) =>{
    let price = '';

    if(data.priceNegociable){
        price = 'Preço Negociável';
    }else{
        price = `$${data.price}`;
    }
    //alert(height);
    return(
        <Item width={25} height={heigth}> 
            <Link to={`/ad/${data.id}`} >
                <div className="itemImage">
                    <img src={data.image} alt=""/>
                </div>
                <div className="itemName">
                    {data.title}
                </div>
                <div className="itemPrice">{price}</div>
            </Link>
        </Item>
    );
}

export default AdItem;