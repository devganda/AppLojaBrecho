import React, {useEffect, useState} from "react";
import { useParams } from "react-router"; // pega os parametros na url
import {PageArea, OtherArea,Breadcumb} from './styled';
import { PageContainer } from "../../components/Maincomponents";
import ContentLoader from 'react-content-loader';
import {Slide} from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import useApi from '../../helpers/api';
import AdItem from "../../components/partials/adItem";
import { Link } from "react-router-dom";


const AdPage = ()=>{
    const api = useApi();
    const{ id } = useParams();
    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState([]);
   
    useEffect(()=>{
        const getAd = async (id) => {
            let json = await api.getAditem(id, true);
            setAdInfo(json);
            setLoading(false);
        }
        getAd(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);

    const formatDate = (date)=>{
        let cDate = new Date(date);
        let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }
    

    return(
        <PageContainer>
            {adInfo.category &&
                <Breadcumb>
                    <Link to="/">Home</Link>/
                    <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>/
                    <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}>{adInfo.category.name}</Link>/
                    <Link to="">{adInfo.title}</Link>
                </Breadcumb>
            }
            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                        {loading && <ContentLoader heigth={300} speed={1}
                            backgroundColor={'#333'}
                            viewBox="0 0 380 70"/>}

                           {adInfo.images &&
                            <Slide>
                                {adInfo.images.map((img, k)=>
                                    <div className="each-slide" key={k}>
                                        <img src={img} alt=""/>
                                    </div>
                                )}
                            </Slide>
                           }
                        </div>
                        <div className="adInfos">
                            <div className="adName">
                            

                            {adInfo.title && 
                                <h2>{adInfo.title}</h2>
                            }

                            {adInfo.dateCreated &&
                                <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                            }
                            </div>
                            <div className="adDescription">
                            {loading && <ContentLoader heigth={100} speed={1}
                            backgroundColor={'#333'}
                            viewBox="0 0 380 70"/>}

                            {adInfo.description}
                            <hr/>
                            {adInfo.views &&
                              <small>Visualizações {adInfo.views}</small>  
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="box box-padding">
                    {loading && <ContentLoader heigth={20} speed={1}
                            backgroundColor={'#333'}
                            viewBox="0 0 380 70"/>}

                            {adInfo.priceNegotiable &&
                                'Preço Negóciável'
                            }

                            {!adInfo.priceNegotiable && adInfo.price &&
                                <div className="price">Preço: <span>${adInfo.price}</span></div>
                            }
                    </div> 
                    {loading && 
                            <ContentLoader 
                            heigth={20}
                            speed={1}
                            backgroundColor={'#333'}
                            viewBox="0 0 380 70">
                            </ContentLoader>
                    }
                    {adInfo.userInfo &&
                        <>
                            <a href={`mailto:${adInfo.userInfo.email}`} target="_blank" className="contactEmail">Fale com o vendedor</a>
                            <div className="box box-padding createdBy">
                                <strong>{adInfo.userInfo.name}</strong>
                                <small>E-mail: {adInfo.userInfo.email}</small>
                                <small>Estado: {adInfo.userInfo.stateName}</small>
                            </div>
                        </>  
                    }
                </div>
            </PageArea>
            <OtherArea>
                {adInfo.others &&
                    <>
                        <h2>Outras ofertas do vendedor</h2>
                        <div class="listarea">
                            {adInfo.others.slice(0,4).map((i, k)=>
                                <AdItem key={k} data={i}/>
                            )}
                        </div>
                    </>
                }
            </OtherArea>
        </PageContainer>
    );
}

export default AdPage;