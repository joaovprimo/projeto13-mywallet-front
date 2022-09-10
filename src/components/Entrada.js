import Top from './Top';
import Formstyle from './Formstyle'
import Container from './Container';
import Button from './Button';
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './Context/Context';
import styled from 'styled-components';
import saida from  '../images/saida.png';
import { postEntrada } from './Axios';

export default function Entrada(){
    const navigate= useNavigate();
    const {inputsent, setInputsent, setArrinputs, arrinputs} = useContext(UserContext);

    function handleform(e){
        setInputsent({...inputsent,
        [e.target.name]: e.target.value,
        })
        }

function sendent(e){
    e.preventDefault();
postEntrada(inputsent).then(()=>
    navigate('/menu')).catch(()=> console.log("erro na inserção"));
}

    return(
        <>
        <Container3>
        <Top>
            <h1>Nova entrada</h1>
            <Link to='/menu'><img src={saida}/></Link>
        </Top>
        <Formstyle1 onSubmit={sendent}>
        <input type="number" placeholder="Valor" value={inputsent.value} name="value" onChange={handleform} required/>
        <input type="text" placeholder="Descrição" value={inputsent.description} name="description" onChange={handleform} required/>
        <Button1 type="submit"> Salvar entrada </Button1>
        </Formstyle1>
        </Container3>
        </>
    )
}

const Container3 = styled(Container)`
align-items:initial;
justify-content:inherit;
`

const Formstyle1 = styled(Formstyle)`
margin-top:35px;
margin-left:15px;
input{
    width:380px;
}
`
const Button1 = styled(Button)`
margin-top:10px;
width:380px;
`


