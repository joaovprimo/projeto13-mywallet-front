import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import UserContext from'./Context/Context';
import Login from "./Login";
import Cadastro from "./Cadastro";
import Menu from './Menu';
import Entrada from './Entrada';
import Saida from './Saida';
//Faltando criar as conexões do axios para dar funcionalidade ao projeto

export default function App(){
    const [valores, setValores] = useState(0)
    const [formlog,setFormlog] = useState({
        email:"",
        senha:""
    });
    const [arrinputs, setArrinputs] = useState([
        {value:"1000", type:"saida", description:"mercado"}, {value:"100", type:"entrada",description:"presente"},
        {value:"1000", type:"entrada", description:"salario"}, {value:"200", type:"saida", description:"Luz"}
    ]);
    const [inputsent, setInputsent] = useState({
        value: "",
        type: "entrada",
        description:""
    })
    const [inputssai, setInputssai] = useState({
        value: "",
        type: "saida",
        description:""
    })
console.log(arrinputs);
    return(
        <>
        <BrowserRouter>
        <UserContext.Provider value={{formlog, setFormlog, arrinputs, setArrinputs,inputsent, setInputsent, inputssai, setInputssai, valores, setValores}}>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/entrada" element={<Entrada/>}/>
            <Route path="/saida" element={<Saida/>}/>
        </Routes>
        </UserContext.Provider>
        </BrowserRouter>
        </>
    )
}