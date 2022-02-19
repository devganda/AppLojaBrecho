import Cookies from "js-cookie";
import qs from 'qs';

const BASEAPI = 'http://alunos.b7web.com.br:501';

// requisicao post
const apiFetchPost = async (url, body) =>{

    if(!body.token){ // se nao tiver o token, pego o token no cookies e atribou ao body
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

    const res = await fetch(BASEAPI+url, { //fazendo a requeisição
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const json = await res.json(); // resultado da requisição

    if(json.notallowed){//se eu nao tiver permissão para acessar a pagina, vou ser redirecionado para a home
        window.location.href='/login';
        return;
    }

    return json;
}

//requisicao get
const apiFetchGET = async (url, body = []) =>{

    if(!body.token){
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

    const res = await fetch(`${BASEAPI+url}?${qs.stringify(body)}`);

    const json = await res.json();

    if(json.notallowed){
        window.location.href='/login';
        return;
    }

    return json;
}

//enviar dados contendo files
const apiFetchFile = async (url, body) =>{
    if(!body.token){ // se nao tiver o token, pego o token no cookies e atribou ao body
        let token = Cookies.get('token');
        if(token){
            body.append('token', token);
        }
    }

    const res = await fetch(BASEAPI+url, { //fazendo a requeisição
        method: 'POST',
        body
    });

    const json = await res.json(); // resultado da requisição

    if(json.notallowed){//se eu nao tiver permissão para acessar a pagina, vou ser redirecionado para a home
        window.location.href='/login';
        return;
    }

    return json;
}

const api = { // requisitando a api para enviar a o email e a senha
    login:async (email, password) =>{
        const json = await apiFetchPost(
            '/user/signin', 
            {email, password}
        );
        return json;
    },

    getStates:async () => { // requisitando o api para puxar os estados
        const json = await apiFetchGET('/states');
        return json.states;
    },

    register: async (name, email, password, stateLoc) =>{
        const json = apiFetchPost(
            '/user/signup',
            {name, email, password, state:stateLoc}
        );

        return json;
    },

    getCategorie: async ()=>{
        const json = await apiFetchGET('/categories');
        return json.categories;
    },

    getAds: async(options)=>{
        const json = await apiFetchGET(
            '/ad/list',
            options
        );

        return json;
    },

    getAditem: async(id, other = false)=>{
        const json = await apiFetchGET(
            '/ad/item',
            {id, other}
        );

        return json;
    },
    Addad: async (fData) => {
        const json = await apiFetchFile(
            '/ad/add',
            fData
        );

        return json;
    }
}

export default () => api;