import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {SearchArea, PageArea} from './styled';
import { PageContainer } from "../../components/Maincomponents";
import AdItem from '../../components/partials/adItem';
import ContentLoader from 'react-content-loader';
import useApi from '../../helpers/api';

const Home = () =>{
    const api = useApi();
    const [stateList, setStateList] = useState([]);
    const [categorie, setCategorie] = useState([]);
    const [adList, setAdsList] = useState([]);
    const [loading, setLoading] = useState(true);

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

    useEffect(()=>{// requisição à api para pegar os anuncios recentes
        const getRecentAds = async () =>{
            let json = await api.getAds({
                sort:'desc',
                limit:4
            });
            setAdsList(json.ads);
            setLoading(false);
        }
        getRecentAds();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    return(
        <>
            <SearchArea>
                <PageContainer>
                    <div className="SearchBox">
                        <form method="GET" action="/ads">
                        {loading && <ContentLoader heigth={300} speed={1}
                            backgroundColor={'#333'}
                            viewBox="0 0 380 70"/>}

                            {!loading && stateList &&
                                <>
                                    <input type="text" name="q" placeholder="O que você procura?"/>
                                    <select name="state">
                                        <option></option>
                                        {stateList.map((i, k)=>
                                            <option key={k} value={i.name} style={{color:'#000'}}>{i.name}</option>
                                        )}
                                    </select>
                                    <button>Pesquisar</button>
                                </>
                            }
                        </form>
                    </div>
                    <div className="CategoryList">
                    {loading && <ContentLoader heigth={300} speed={1}
                            backgroundColor={'#333'}
                            viewBox="0 0 380 70"/>}

                    {!loading && categorie.map((i,k)=>
                        <Link key={k} to={`/ads?cat=${i.slug}`} className="categorieItem">
                            <img src={i.img} alt=""/>
                            <span>{i.name}</span>
                        </Link>
                    )}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageArea>
                <PageContainer>
                    {loading && <ContentLoader heigth={300} speed={1}
                                backgroundColor={'#333'}
                                viewBox="0 0 380 70"/>}
                    {!loading && adList &&
                        <>      
                            <h2>Anúncios Recentes</h2>
                            <div className="list">
                                {adList.map((i, k)=>
                                    <AdItem key={k} data={i} /> 
                                )}
                            </div>
                            <Link to="/ads" className="seeAllLink">Ver todos</Link>
                        </>
                    }
                </PageContainer>
            </PageArea>
        </>
    );
}

export default Home;