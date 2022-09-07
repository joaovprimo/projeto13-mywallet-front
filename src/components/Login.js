import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Formlogin from './Formlogin';

export default function Login (){

return(
    <>
    <Container>
    <Logo>MyWallet</Logo>
    <Formlogin/>
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

const Container = styled.div`
width:100vw;
height:100vh;
background-color:rgba(140, 17, 190, 1);
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`