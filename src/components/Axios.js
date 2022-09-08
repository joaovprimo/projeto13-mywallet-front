import axios from "axios";
const Base_URL = "http://localhost:5000/";

function createHeaders (){
    const auth = localStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${auth}`
        }
    }
    return config;
}

function postaLogin(form){
const promise = axios.post(`${Base_URL}login`, form);
return promise;
}

function postRegister (form){
    const promise = axios.post(`${Base_URL}register`,form);
    return promise;
}

function getList (){
    const config = createHeaders();
    const promise = axios.get(`${Base_URL}list`,config);
    return promise;
}

function postSaida(content){
    const config = createHeaders();
    const promise = axios.post(`${Base_URL}list`, content, config);
    return promise;
}

function postEntrada(content){
    const config = createHeaders();
    const promise = axios.post(`${Base_URL}list`,content, config);
    return promise;
}

export {postaLogin, postRegister, getList, postSaida, postEntrada}