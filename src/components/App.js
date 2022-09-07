import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import UserContext from'./Context/Context';
import Login from "./Login";

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
        </Routes>
        </UserContext.Provider>
        </BrowserRouter>
        </>
    )
}