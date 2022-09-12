import { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Button from './Button'
import UserContext from './Context/Context'
import Formstyle from './Formstyle'
import styled from 'styled-components';
import {postRegister} from "./Axios";

export default function Formcadastro(){
    const navigate= useNavigate();
    const [password, setPassword] = useState("");
    const [formCadastro, setFormCadastro] = useState ({
        nome:"",
        email:"",
        senha:"",
    });

    function handleform(e){
        setFormCadastro({...formCadastro,
            [e.target.name]: e.target.value,
            })
    }

    function datas(e){
        e.preventDefault();
        if(formCadastro.senha===password){
            postRegister(formCadastro).then((resp)=>{
                setFormCadastro({nome:"", email:"", senha:""});
                navigate('/')
            }).catch(()=> alert("erro"));
            
        }else{
            alert("favor preeencher os campos corretamente")
            console.log("deu ruim");
        }
    }


   return (
    <>
    <Formstyle onSubmit={datas}>
        <input tyme="text" placeholder="Nome" value={formCadastro.nome} name='nome' onChange={handleform} required/>
        <input type="email" placeholder="E-mail" value={formCadastro.email} name="email" onChange={handleform} required/>
        <input type="password" placeholder="Senha" value={formCadastro.senha} name="senha" onChange={handleform} required/>
        <input type="password" placeholder="Confirme a senha" value={password} name="senha" onChange={e=>setPassword(e.target.value)} required/>
        <Button>Cadastrar</Button>
        <Styledlink to="/">Já tem uma conta? Entre agora!</Styledlink>
    </Formstyle>
    </>
   )
}

const Styledlink = styled(Link)`
font-family: 'Raleway';
color:rgba(255, 255, 255, 1);
font-size: 15px;
display:flex;
justify-content:center;
font-weight: 700;
text-decoration:none;
`