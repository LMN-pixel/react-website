import styled from 'styled-components';


export const ButtonContainer = styled.button`
font-size: 1.1rem;
background: #222;
border-radius: 5px;
border: 0.05rem solid #ccc;
border-color:black;
color:white;
padding: 0.2rem 0.5rem;
cursor: pointer; 
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: black;
    color: white;
}
&:focus {
    outline:none;
}
`;