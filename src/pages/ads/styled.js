import styled from 'styled-components';

export const PageArea = styled.div`
    display:flex;
    margin-top:20px;
    gap: 20px;

    .leftSide{
        width:250px;
        background-color:#434454;
        border-radius:5px;
        padding:10px;

        .filterName{
            font-size:15px;
            margin:10px 0;
        }

        input, select{
            width:100%;
            height:40px;
            border:solid 2px #6d6e8b;
            outline:none;
            padding:10px;
            border-radius:5px;
            color:#000;
        }

        ul,li{
            margin:0;
            padding:0;
            list-style:none;
        }

        .categoryItem{
            display:flex;
            align-items:center;
            padding:10px;
            border-radius:5px;
            cursor:pointer;
            gap:5px;
            img{
                width:40px;
                height:40px;
            }
        }

        .categoryItem:hover, 
        .categoryItem.active{
            background-color:#5d6083;
        }
    }
    .rightSide{
        flex:1;

        h2{
            margin-top:0;
            font-size:18px;
        }

        .listWarning{
            padding:30px;
            text-align:center;
        }

        .list{
            
            display:flex;
            flex-wrap:wrap;
            background-color: #434454;
            border-radius: 5px;
        }
    }
`;