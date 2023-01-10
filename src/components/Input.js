import styled from 'styled-components';
import { useContext, useEffect } from 'react';
import UserContext from './Context/Context';
import trash from '../images/trash.png';
import { deleteObj, getList } from './Axios/Axios';

export default function Input({value, type, description, day, inp}){
    const { setValores, valores, arrinputs } = useContext(UserContext);
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
    
    function deleteInfo(select){
        deleteObj(select).then((data)=>{
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    return (
        <>
        <Insert>
        <h2>{day}</h2>
        <h3>{description}</h3>
        <Value type={type}>{value}</Value>
        <Trash src={trash} onClick={()=>deleteInfo(inp)}/>
        </Insert>
        </>
    )
}

const Trash = styled.img`
width:25px;
height:25px;
margin-right:5px;
`

const Insert = styled.div`
display:flex;
width:100%;
justify-content:space-between;
margin-bottom:15px;

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
