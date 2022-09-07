import styled from 'styled-components';

export default function Top ({children}){
return(
<Topo>
    {children}
</Topo>
)
}

const Topo = styled.div`
font-family: 'Raleway';
font-weight: 700;
font-size: 26px;
margin-top:25px;
margin-left:25px;
display:flex;
justify-content:space-between;

h1{
    color: #FFFFFF;
}

img{
    margin-right:24px;
}
`