import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from './Button'
import UserContext from './Context/Context'
import Formstyle from './Formstyle'
import styled from 'styled-components';

export default function Formlogin(){
const {formlog, setFormlog} = useContext(UserContext);

function handleform(e){
setFormlog({...formlog,
[e.target.name]: e.target.value,
})
}

function makingLogin(e){
e.preventDefault();
console.log("enviou");
}

return(
    <>
    <Formstyle  onSubmit={makingLogin}>
        <input type="email" placeholder="E-mail" value={formlog.email} name="email" onChange={handleform} />
        <input type="password" placeholder="Senha" value={formlog.senha} name="senha" onChange={handleform} />
        <Button type="submit"> Entrar </Button>
        <Styledlink to="/cadastro">Primeira vez? Cadastre-se!</Styledlink>
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