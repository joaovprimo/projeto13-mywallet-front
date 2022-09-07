import Top from './Top';
import Formstyle from './Formstyle'
import Container from './Container';
import Button from './Button';
import { useContext } from 'react'
import UserContext from './Context/Context';

export default function Entrada(){
    const {inputsent, setInputsent, setArrinputs, arrinputs} = useContext(UserContext);

    function handleform(e){
        setInputsent({...inputsent,
        [e.target.name]: e.target.value,
        })
        }

function sendent(e){
    e.preventDefault();
setArrinputs([...arrinputs, inputsent]);
}

    return(
        <>
        <Container>
        <Top>
            <h1>Nova entrada</h1>
        </Top>
        <Formstyle onSubmit={sendent}>
        <input type="number" placeholder="Valor" value={inputsent.value} name="value" onChange={handleform} required/>
        <input type="text" placeholder="Descrição" value={inputsent.description} name="description" onChange={handleform} required/>
        <Button type="submit"> Salvar entrada </Button>
        </Formstyle>
        </Container>
        </>
    )
}