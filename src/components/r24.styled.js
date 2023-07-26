import styled from "styled-components"

export const Wrapper = styled.div `
display: flex;
flex-direction: column;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background-color: #ddd;
width: 80vw;
min-height: 90%;
justify-content: center;
align-items: center;
font-size: 1.5rem;
`
export const UpperWrapper = styled.div`

display: flex;
flex-direction: row;
width: 100%;
height: 15vh;
justify-content: center;
align-items: center;
background-color: #333;
color: white;
`

export const ContactWrapper = styled.div `
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

`

