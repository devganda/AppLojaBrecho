import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from  'react-router-dom';
import {PageArea} from './styled';
import { PageContainer, PageTitle, ErrorMessage } from "../../components/Maincomponents";
import useApi from '../../helpers/api';
import MaskedInput from 'react-text-mask';
import creatNumberMask from 'text-mask-addons/dist/createNumberMask';

const Addad = () =>{
    const api = useApi();
    const navigate = useNavigate();
    const fileField = useRef();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([])
    const [price, setPrice] = useState('');
    const [priceNegociable, setPriceNegociable] = useState(false);
    const [desc, setDesc] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

   const handleSubmit = async(e)=>{
       e.preventDefault();
       setDisabled(true);
       setError('');

       let errors = [];

       if(!title.trim()){
            errors.push('Sem título');
       }

       if(!category){
            errors.push('Sem categoria');
       }

       if(errors.length === 0){
            const fData = new FormData();
            fData.append('title', title);
            fData.append('price', price);
            fData.append('priceneg', priceNegociable);
            fData.append('desc', desc);
            fData.append('cat', category);

            if(fileField.current.files.length > 0 ){ // verificar se tem algum arquivo
                for(let i = 0; i<fileField.current.files.length; i++){ // adicionando as imagens
                    fData.append('img', fileField.current.files[i]);
                }
            }

            const json = await api.Addad(fData);

            if(!json.error){
               return navigate(`/ad/${json.id}`);
            }else{
                setError(json.error);
                setDisabled(false);
            }

        }else{
            setError(errors.join("\n"));
            setDisabled(false);
        }

       setDisabled(false);

   }

   useEffect(()=>{
        const getCategorie = async()=>{
            let json = await api.getCategorie();
            setCategories(json);
        }
        getCategorie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const priceMask = creatNumberMask({
        prefix:'R$ ', 
        includeThousandsSeparator:true,
        thousandsSeparatorSymbol:'.',
        allowDecimal:true,
        decimalSymbol:','
    });

    return(
        <PageContainer>
            <PageTitle>Poste um anúncio</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area"> 
                        <div className="area--title">
                        Título
                        </div>
                        <div className="area--input">
                            <input type="text" placeholder="Digite seu título" value={title} onChange={e=>setTitle(e.target.value)} disabled={disabled} required/>
                        </div>
                    </label>
                    <label className="area"> 
                        <div className="area--title">
                        Categoria
                        </div>
                        <div className="area--input">
                            <select
                            disabled={disabled}
                            onChange={e=>setCategory(e.target.value)}
                            >
                                <option></option>
                                {categories &&

                                    categories.map((i, k)=>
                                    <option key={k} value={i._id} style={{color:'#999'}}>{i.name}</option>
                                 )}
                            </select>
                        </div>
                    </label>
                    <label className="area"> 
                        <div className="area--title">
                        Preço
                        </div>
                        <div className="area--input">
                           <MaskedInput
                            mask={priceMask}
                            placeholder="R$ "
                            disabled={disabled || priceNegociable}
                            value={price}
                            onChange={e=>setPrice(e.target.value)}
                            style={{color:'#000'}}
                           />
                        </div>
                    </label>
                    <label className="area"> 
                        <div className="area--title">
                        Preço Negociável
                        </div>
                        <div className="area--input">
                            <input type="checkbox"
                            disabled={disabled}
                            checked={priceNegociable}
                            onChange={e=>setPriceNegociable(!priceNegociable)}
                            />
                        </div>
                    </label>
                    <label className="area"> 
                        <div className="area--title">
                        Descrição
                        </div>
                        <div className="area--input">
                            <textarea
                            disabled={disabled}
                            value={desc}
                            onChange={e=>setDesc(e.target.value)}
                            ></textarea>
                        </div>
                    </label>
                    <label className="area"> 
                        <div className="area--title">
                        Imagens (1 ou mais)
                        </div>
                        <div className="area--input">
                            <input
                            type="file"
                            disabled={disabled}
                            multiple
                            ref={fileField}
                            />
                        </div>
                    </label>
                    <label className="area"> 
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>{disabled ? 'Carregando...' : 'Adicionar anúncio'}</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Addad;