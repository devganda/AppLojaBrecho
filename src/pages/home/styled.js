import styled from 'styled-components';

export const SearchArea = styled.div`
    background-color:#434454;
    border-bottom: solid 1px #6d6e8b;
    padding:20px 0;

    .SearchBox{
        background-color:#20212c;
        padding:20px 15px;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0.3px rgba(0,0,0,0.2);
        display:flex;

        form{
            flex:1;
            display:flex;
            gap:20px;

            input, select{
                height:40px;
                border:0;
                border-radius:5px;
                color:#000;
                outline:0;
            }

            input{
                flex:1;
                padding:o 10px;
            }

            select{
               width:100px; 
            }

            button{
                border-radius:5px;
                font-size:15px;
                border:0;
                padding: 0 20px;
                heigth:40px;
                cursor:pointer;
                background-color:#434454;
                color:#FFF;

                &:hover{
                    //background-color:#6d6e8b;
                    filter: brightness(0.9);
                }
            }
        }
    }

    .CategoryList{
        display:flex;
        flex-wrap:wrap;
        margin-top:20px;

        .categorieItem{
            display:flex;
            width:25%;
            text-decoration:none;
            align-items:center;
            margin-bottom:10px;
            height:50px;
            transition: all ease 0.4s;
            gap: 5px;

            &:hover{
                filter: brightness(0.5);
            }

            img{
                width:43px;
                heigth:45px;
            }
        }
    }
`;
export const PageArea = styled.div`
    //background-color:#434454;
    padding:20px 0;

    h2{
        font-size:20px;
    }

    .list{
        display:flex;
        flex-wrap:wrap;
    }

    .seeAllLink{
        text-decoration:none;
        font-weight:bold;
        display:inline-block;
        margin-top:10px;

        &:hover{
            filter: brightness(0.5);
        }
    }
`;