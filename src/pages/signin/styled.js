import styled from 'styled-components';

export const PageArea = styled.div`
    form{
        background-color:#434454;
        border-radius:3px;
        padding:10px;
        box-shadow:0px 0px 3px #999;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .area{
            display:flex;
            align-items:center;
            padding:10px;
            max-width:500px;

            .area--title{
                width:200px;
                text-align:right;
                padding-right:20px;
                font-weight:bold;
                font-size:14px;
            }

            .area--input{
                flex: 1;

                input[type=password], [type=email]{
                    width:100%;
                    font-size:14px;
                    padding:5px;
                    border:solid 1px #DDD;
                    border-radius:4px;
                    outline:0;
                    color:#000;
                    transition:all ease .4s;

                    &:focus{
                        border:solid 1px #20212C;
                        color:#20212C;
                    }
                }

                button{
                    background-color:#20212C;
                    border:0;
                    outline:0;
                    padding:5px 10px;
                    border-radius:4px;
                    font-size:15px;
                    cursor:pointer;
                    

                    &:hover{
                        background-color:#1b1d2c78;
                    }
                }
            }
        }
    }
`;