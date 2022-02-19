import React, {useState, useEffect} from "react";
import {PageArea} from './styled';
import { PageContainer, PageTitle, ErrorMessage } from "../../components/Maincomponents";
import useApi from '../../helpers/api';
import {doLogin} from '../../helpers/AuthHandler';

const Signup = () =>{
    const api = useApi();
    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState();
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [stateList, setStateList] = useState([]);


    useEffect(()=>{ //requisitar api para trazer os estados(loc)
        const getStatesLoc = async() =>{
            let slist = await api.getStates();
            setStateList(slist);
        }
        getStatesLoc();
    },[]);

   const handleSubmit = async(e)=>{
       e.preventDefault();
       setDisabled(true);
       setError('');

       if(password !== confirmPassword){
            setError('Senhas não batem');
            setDisabled(false);
            return;
       }

       const json = await api.register(name,email, password, stateLoc);
       
       if(json.error){
            setError(json.error);
       }else{
            doLogin(json.token);
            window.location.href = '/';
       }

       setDisabled(false);
   }
    return(
        <PageContainer>
            <PageTitle>Cadastro</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area"> 
                        <div className="area--title">
                        Nome completo
                        </div>
                        <div className="area--input">
                            <input type="text" placeholder="Digite seu Nome" value={name} onChange={e=>setName(e.target.value)} disabled={disabled} required/>
                        </div>
                    </label>
                    <label className="area"> 
                        <div className="area--title">
                        Estado
                        </div>
                        <div className="area--input">
                            <select value={stateLoc} onChange={e=>setStateLoc(e.target.value)} required>
                                <option></option>
                                {stateList.length>0 ? stateList.map((i, k)=>
                                    <option key={k} value={i._id} style={{color:'#000'}}>{i.name}</option>
                                ): null}
                           </select>
                        </div>
                    </label>
                    <label className="area"> 
                        <div className="area--title">
                        E-mail
                        </div>
                        <div className="area--input">
                            <input type="email" placeholder="Digite seu e-mail" value={email} onChange={e=>setEmail(e.target.value)} disabled={disabled} required/>
                        </div>
                    </label>
                    <label className="area"> 
                        <div className="area--title">
                        Senha
                        </div>
                        <div className="area--input">
                            <input type="password" placeholder="Digite sua senha" value={password} onChange={e=>setPassword(e.target.value)} disabled={disabled} required/>
                        </div>
                    </label>
                    <label className="area"> 
                        <div className="area--title">
                        Confirmar Senha
                        </div>
                        <div className="area--input">
                            <input type="password" checked={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} placeholder="Confirmar Senha" disabled={disabled}/>
                        </div>
                    </label>
                    <label className="area"> 
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>{disabled ? 'Carregando...' : 'Fazer Cadastro'}</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Signup;