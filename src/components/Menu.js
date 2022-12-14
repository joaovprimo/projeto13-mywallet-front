import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect} from 'react'
import Container from "./Container";
import UserContext from './Context/Context';
import Top from './Top';
import styled from 'styled-components';
import saida from  '../images/saida.png';
import Input from './Input';
import { getList } from "./Axios/Axios";


export default function Menu (){
    const {arrinputs, setArrinputs,setValores, valores,nomeUser} = useContext(UserContext);
    const navigate = useNavigate();
    console.log(valores)
    useEffect(() => {
        getList().then((hbt) => {
            setValores(valores)
            setArrinputs(hbt.data);
        })
    }, [])

    function finalizar (){
        localStorage.clear('token');
        navigate('/');
        window.location.reload();
    }
    return( 
        <>
    <Container2>
        <Top>
        <h1>Olá, {nomeUser}</h1>
        <ButLink onClick={finalizar} ><img src={saida}/></ButLink>
        </Top>
        <List>
        {arrinputs.length === 0 ? <h1>Não há registros de
            entrada ou saída</h1> : <><Inpt> {arrinputs.map((inp, index)=>
            <Input hey={index} inp={inp} value={inp.value} type={inp.type} day={inp.day} description={inp.description}/>)}
            </Inpt> 
            <Saldo>
            <h3>Saldo</h3>
            <Val valor={valores}>{valores}</Val>
            </Saldo>
            </>}
           
        </List>
        
        <Inserts>
          <Receipts to='/entrada'>
          <ion-icon name="add-circle-outline"></ion-icon>
            <h2>Nova Entrada</h2>
          </Receipts>
          <Outgoing to='/saida'>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <h2>Nova saída</h2>
          </Outgoing>
        </Inserts>
    </Container2>
    </>
    )
}

const Container2 = styled(Container)`
justify-content:inherit;
align-items:initial;
`
const List = styled.div`
position:relative;
background-color:#ffffff;
margin-top:25px;
width: 88%;
height: 60%;
margin-left:25px;
display:flex;
align-items:center;
justify-content:center;
h1{
    font-family: 'Raleway';
    font-size: 20px;
    width: 180px;
    height: 46px;
    color: #868686;
    text-align:center;
    font-weight:bold;
}
`
const Inserts = styled.div`
display:flex;
justify-content:space-around;
margin-top:15px;
`

const Receipts= styled(Link)`
background-color:rgba(163, 40, 214, 1);
width: 155px;
height: 114px;
border-radius: 5px;
display:flex;
flex-direction:column;
align-items:space-between;
border-style:none;
color:#ffffff;
text-decoration:none;

ion-icon{
    margin-top:15px;
    font-size:25px;
    margin-left:10px;
}

h2{
    width: 64px;
    height: 40px;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 17px;
    margin-top:30px;
    text-align: initial;
    margin-left:10px;
}

`
const Outgoing = styled(Link)`
background-color:rgba(163, 40, 214, 1);
width: 155px;
height: 114px;
border-radius: 5px;
display:flex;
flex-direction:column;
align-items:space-between;
border-style:none;
color:#ffffff;
text-decoration:none;

ion-icon{
    margin-top:15px;
    font-size:25px;
    margin-left:10px;
}

h2{
    width: 64px;
    height: 40px;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 17px;
    margin-top:30px;
    text-align: initial;
    margin-left:10px;
}
`
const Inpt = styled.div`
position:absolute;
font-family: 'Raleway';
display:flex;
flex-direction:column;
margin-top:25px;
width:100%;
height:95%;
`

const Saldo = styled.div`
position:absolute;
display:flex;
bottom:10px;
left:0;
margin-left:25px;
font-family: 'Raleway';
h3{font-weight: bold;
font-size: 20px;

}
`
const Val = styled.h4`
margin-left:210px;
color: ${props => props.valor>0 ? "rgba(3, 172, 0, 1)" : "rgba(199, 0, 0, 1)"};
font-weight:bold;
font-size:20px;
`

const ButLink = styled.div`

`