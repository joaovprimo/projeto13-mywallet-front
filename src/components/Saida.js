import Top from './Top';
import Formstyle from './Formstyle'
import Container from './Container';
import Button from './Button';
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import UserContext from './Context/Context';
import styled from 'styled-components';
import saida from  '../images/saida.png';
import { postSaida } from './Axios/Axios';

export default function Saida(){
    const navigate= useNavigate();
    const {inputssai, setInputssai, setValores} = useContext(UserContext);

    function handleform(e){
        setInputssai({...inputssai,
        [e.target.name]: e.target.value,
        })
        }

function sendent(e){
    e.preventDefault();
    postSaida(inputssai).then(()=>{
        setValores(0);
        navigate('/menu');
        setInputssai({ value: "",
        type: "saida",
        description:""})
    }).catch(()=> console.log("erro na inserção")
    )
}

    return(
        <>
        <Container3>
        <Top>
            <h1>Nova saída</h1>
            <Link to='/menu'><img src={saida}/></Link>
        </Top>
        <Formstyle1 onSubmit={sendent}>
        <input type="number" placeholder="Valor" value={inputssai.value} name="value" onChange={handleform} required/>
        <input type="text" placeholder="Descrição" value={inputssai.description} name="description" onChange={handleform} required/>
        <Button1 type="submit"> Salvar saída </Button1>
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
