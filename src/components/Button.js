import styled from 'styled-components';

export default function Button ({children}){
return(
<But>
    {children}
</But>
)
}

const But = styled.button`
width: 330px;
height: 45px;
background: #A328D6;
border-radius: 5px;
display:flex;
align-items:center;
justify-content:center;
color: #FFFFFF;
font-size:21px;
font-family: 'Raleway';
border-style:none;
margin-bottom:35px;
`