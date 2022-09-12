import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import UserContext from './Context/Context'
export default function Input({value, type, description, day}){
    const { setValores} = useContext(UserContext);
    let newValores= Number(value);
    if(type === "entrada"){
        useEffect(()=>{
           
            setValores((valores)=>valores + newValores);
        },[])
    }else{
        useEffect(()=>{
            
            setValores((valores)=>valores + (-newValores));
        },[])
    }
    
    
    return (
        <>
        <Insert>
        <h2>{day}</h2>
        <h3>{description}</h3>
        <Value type={type}>{value}</Value>
        </Insert>
        </>
    )
}



const Insert = styled.div`
display:flex;

h2{
    color: #C6C6C6;
    font-size:16px;
    font-weight:bold;
    width:50px;
    margin-left: 20px;
}
h3{margin-left:15px;
    font-size:17px;
    color:#000;
    margin-right:90px;
 width:100px;
}
`

const Value = styled.p`
margin-right:15px;
margin-bottom:15px;
margin-left:40px;
color: ${props=> props.type ==="entrada" ? "rgba(3, 172, 0, 1)" : "rgba(199, 0, 0, 1)"};

`
