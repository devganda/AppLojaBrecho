import styled from "styled-components";

export const HeaderArea = styled.div`
    height:60px;
    background-color: #20212c;
    border-bottom: solid 1px #434454;
    .container{
        max-width:1000px;
        margin:auto;
        display:flex;
        

        a{
            text-decoration:none;
        }
        .logo{
            flex:1;
            display:flex;
            align-items:center;

            .logo-name{
                color:#ffffff96;
                outline:none;
                font-size:27px;
                font-weight:bold;
            }
        }

        nav{
            padding-top:10px;
            padding-bottom:10px;

            ul,li{
                margin:0;
                padding:0;
                list-style:none;
            }

            ul{
                display:flex;
                align-items:center;
                height:40px;
                gap: 25px;
            }

            li{
              
                a, button{
                    font-size:14px;
                    cursor:pointer;
                    border:0;
                    text-decoration:none;
                    background:none;
                    outline:none;
                    &:hover{
                        color:#999;
                    }

                    &.poste-anuncio{
                        border-radius:4px;
                        background-color:#434454; 
                        color:#ffffff96;
                        padding:5px 10px;
                    }

                    &.poste-anuncio:hover{
                        //background-color:#6d6e8b;
                        filter: brightness(0.9);
                    }
                }
            }

        }
    }

    

    
    
`;