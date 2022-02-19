import styled from "styled-components";

export const Item = styled.div`
    width:${props=>props.width || 20}%;
    a{
        display:block;
        border:solid 1px #6d6e8b;
        margin:10px;
        text-decoration:none;
        padding:10px; 
        border-radius:5px;
        transition:all ease 0.4s;
        box-shadow: 2px 3px 4px 0 #48484e;
        height: ${props=>props.height|| 300}px;

        &:hover{
            filter: brightness(0.5);
        }

        .itemImage img{
            width:100%;
            border-radius:5px; 
        }

        .itemName{
            font-weight:bold;
        }
    }
`;