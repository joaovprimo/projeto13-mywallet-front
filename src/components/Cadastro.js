import { useState, useEffect } from 'react';
import Container from "./Container";
import styled from 'styled-components';
import Formcadastro from './Formcadastro';

export default function Cadastro(){

return(
    <>
    <Container>
        <Logo>MyWallet</Logo>
        <Formcadastro/>
    </Container>
    </>
)
}

const Logo = styled.div`
font-family: 'Saira Stencil One';
font-size: 32px;
color: #FFFFFF;
margin-bottom:25px;
`