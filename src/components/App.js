import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import UserContext from'./Context/Context';
import Login from "./Login";
import Cadastro from "./Cadastro";

export default function App(){
    const [formlog,setFormlog] = useState({
        email:"",
        senha:""
    });

    return(
        <>
        <BrowserRouter>
        <UserContext.Provider value={{formlog, setFormlog}}>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
        </Routes>
        </UserContext.Provider>
        </BrowserRouter>
        </>
    )
}