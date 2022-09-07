import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import UserContext from'./Context/Context';
import Login from "./Login";
import Cadastro from "./Cadastro";
import Menu from './Menu'

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
    const [inputs, setInputs] = useState({
        value: "",
        type: "",
        description:""
    })

    return(
        <>
        <BrowserRouter>
        <UserContext.Provider value={{formlog, setFormlog, arrinputs, setArrinputs,inputs, setInputs, valores, setValores}}>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/menu" element={<Menu/>}/>
        </Routes>
        </UserContext.Provider>
        </BrowserRouter>
        </>
    )
}