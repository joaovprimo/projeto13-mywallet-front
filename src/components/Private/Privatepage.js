import { useNavigate } from "react-router-dom";

export default function Privatepage({children}){
    const navigate = useNavigate();
    const auth = localStorage.getItem('token');

    if(auth){
        return(
                <>
                {children}
                </>
        )
    }else{
        alert("Acesso negado");
        navigate("/");
    }
}