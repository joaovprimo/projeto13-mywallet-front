import styled from "styled-components";

const Formstyle = styled.form`
font-family: 'Raleway';
display:flex;
flex-direction:column;
input{
    width:325px;
    height:60px;
    background-color: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-bottom:10px;
}
input::placeholder{
    font-family: 'Raleway';
    color: #000000;
    padding-left: 15px;
    font-size:20px;
}
`
export default Formstyle;