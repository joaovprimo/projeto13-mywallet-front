import styled from 'styled-components';
import Formlogin from './Formlogin';
import Container from './Container';

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

