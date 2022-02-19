import styled from 'styled-components';

/*export const Fake = styled.div`
   background-color: #DDD; 
   height:${props=>props.heigth || 20}px;
`;*/

export const OtherArea = styled.div`
    h2{
        font-size:20px;
    }

    .listarea{
        display:flex;
        flex-wrap:wrap;
    }
`;

export const Breadcumb = styled.div`
    font-size:13px;
    margin-top:20px;

    a{
       display:inline-block;
       margin:0px 5px;
       text-decoration:none;
       
       &:hover{
           filter: brightness(0.5);
       }
    }
`;

export const PageArea = styled.div`
    display:flex;
    margin-top:20px;

    .box{
        background-color:#434454;
        border-radius:5px;
        box-shadow:0px 0px 4px #48484e;
        margin-bottom: 20px;
    }

    .box-padding{
        padding:10px;
    }

    .leftSide{
        flex:1;
        margin-right: 20px;

        .box{
            display:flex;
        }
        .adImage{
            width:320px;
            height:320px;
            margin-right:20px;

            .each-slide img{
                display:flex;
                align-items:center;
                justify-content:center;
                background-size:cover;
                height:320px;
                border-radius:5px;
            }
        }

        .adInfos{
            flex:1;
           
            .adName{
                margin:20px;

                h2{
                    margin:0;
                    margin-top:20px;
                }

                small{
                    color:#999;
                }
            }

            .adDescription{
                margin:20px;
                small{
                    color:#999;
                }
            }
        }
    }

    .rightSide{
        width:250px;

        .price span{
            color:#00DCFF;
            display:block;
            font-size:27px;
            font-weight:bold;
        }

        .contactEmail{
            height:30px;
            border-radius:5px;
            box-shadow: 0px 0px 4px #48484e;
            margin-bottom:20px; 
            display:flex;
            justify-content:center;
            align-items:center;
            text-decoration:none;
            background-color:#5d6083;
            padding:25px;

            &:hover{
                filter: brightness(0.5);
            }
        }

        .createdBy{
            display: flex;
            flex-direction: column;
        }

        .createdBy small{
            color:#999;
            display:block;
            margin-top:10px;
        }
    }
`;