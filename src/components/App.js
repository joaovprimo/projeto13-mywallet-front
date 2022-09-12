import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import UserContext from'./Context/Context';
import Login from "./Login";
import Cadastro from "./Cadastro";
import Menu from './Menu';
import Entrada from './Entrada';
import Saida from './Saida';
import PrivatePage from './Private/Privatepage';


export default function App(){
    const [token,setToken] = useState("");
    const [valores, setValores] = useState(0)
    const [nomeUser, setNomeUser] = useState("")
    const [formlog,setFormlog] = useState({
        email:"",
        senha:""
    });
    const [arrinputs, setArrinputs] = useState([
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
    return(
        <>
        <BrowserRouter>
        <UserContext.Provider value={{nomeUser, setNomeUser, token,setToken,formlog, setFormlog, arrinputs, setArrinputs,inputsent, setInputsent, inputssai, setInputssai, valores, setValores}}>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/menu" element={<PrivatePage>
                                            <Menu/>
                                            </PrivatePage>}/>
            <Route path="/entrada" element={<PrivatePage>
                                            <Entrada/>
                                            </PrivatePage>}/>
            <Route path="/saida" element={<PrivatePage>
                                                <Saida/>
                                                </PrivatePage>}/>
        </Routes>
        </UserContext.Provider>
        </BrowserRouter>
        </>
    )
}