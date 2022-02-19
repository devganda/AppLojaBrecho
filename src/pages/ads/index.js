import React, {useState, useEffect} from "react";
import { Link,useNavigate, useLocation } from "react-router-dom";
import {PageArea} from './styled';
import { PageContainer } from "../../components/Maincomponents";
import ContentLoader from 'react-content-loader';
import useApi from '../../helpers/api';
import AdItem from "../../components/partials/adItem";
let timer;
const Ads = () =>{
    const api = useApi();
    /* URL*/
    const navigate = useNavigate();
    const useQueryString = ()=>{ // função para pegar os get na url
        return new URLSearchParams(useLocation().search); // retorna um objeto com todos os parametros get
    }
    const query = useQueryString();
    const [q, setQ] = useState(query.get('q') != null ? query.get('q'): ''); // verificando se o get q está preenchido
    const [states, setSates] = useState(query.get('state') != null ? query.get('state') : ''); //verificando se o get state está preenchido
    const [cat, setCat] = useState(query.get('cat') != null ? query.get('cat') : ''); //verificando se o get cat está preenchido

    /** API */
    const [stateList, setStateList] = useState([]);
    const [categorie, setCategorie] = useState([]);
    const [adList, setAdsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [opacityResult, setOpacityResult] = useState(1);
    

    const geAdsList = async()=>{// requsição enviando os parametros de busca 
        setLoading(true);
        let json = await api.getAds({
            sort:'desc',
            limit:9,
            q,
            cat,
            states
        });
        
        setAdsList(json.ads);
        setLoading(false);
        setOpacityResult(1);
    }

    useEffect(()=>{ // atualiza os gets com as informaçoes preenchidas nos campos.
        let queryString = [];
        if(q){
            queryString.push(`q=${q}`);
        }
        if(cat){
            queryString.push(`cat=${cat}`);
        }
        if(states){
            queryString.push(`state=${states}`);
        }

        navigate(`?${queryString.join('&')}`,{replace:true});// o join junta toda string e da pra separar passando um parametro

        if(timer){ // se tiver algum dado na variavel time 
            clearTimeout(timer); // limpa a variavel
        }
        setTimeout(geAdsList, 2000); // executa a função após dois segundos
        setOpacityResult(0.3)
    }, [q, cat, states])

    useEffect(()=>{//requisição à api para pegar os estados
        const getList = async () =>{
            let slist = await api.getStates();
            setStateList(slist);
            setLoading(false);
        }
        getList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    useEffect(()=>{// requisição à api para pegar as categorias
        const getCategory = async () =>{
            let scategorie = await api.getCategorie();
            setCategorie(scategorie);
            setLoading(false);
        }
        getCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    
    
    return(
       <PageContainer>
           <PageArea>
            <div className="leftSide">
                <form method="GET">
                    <input type="text" name="q" placeholder="O que você procura?" value={q} onChange={e=>setQ(e.target.value)}/>
                    <div className="filterName">
                        Estado:
                        <select name="state" value={states} onChange={e=>setSates(e.target.value)}>
                            <option></option>
                            {stateList && 
                                stateList.map((i, k)=>
                                <option key="k" value={i.name} style={{color:'#000'}} >{i.name}</option>
                            )}
                        </select>
                    </div>
                    <div className="filterName">
                        Categoria:
                        <ul> 
                            {categorie &&
                                categorie.map((i, k)=>
                                    <li key={k} className={cat === i.slug ? 'categoryItem active' : 'categoryItem'} onClick={e=>setCat(i.slug)}>
                                        <img src={i.img} alt=""/>
                                        <span>{i.name}</span>
                                    </li>
                                )             
                            }
                        </ul>
                    </div>
                </form>
            </div>
            <div className="rightSide">
                <h2>Resultado:</h2>
                {loading &&
                    <div className="listWarning">Carregando</div>
                }
               
                {!loading && adList.length === 0 &&
                    <div className="listWarning">Nenhum registro encontrado</div>
                }
                <div className="list" style={{opacity:opacityResult}}>
                    {adList &&
                        adList.map((i, k)=>
                            <AdItem key={k} data={i} heigth={250}/>
                        )
                    }
                </div>
            </div>
           </PageArea>
       </PageContainer>
    );
}

export default Ads;