import React from 'react'
import ReactDOM from 'react-dom/client'
import { Wrapper, UpperWrapper } from './components/r24.styled';
import { BsFillCalendar2Fill, BsArrowDownUp } from "react-icons/bs";
import Contact from './components/Contact';
import { getContacts } from './components/db.jsx'



function R24App () {

    let contacts = getContacts()

    return (
        <Wrapper>
            <UpperWrapper>
                <BsFillCalendar2Fill style={{
                    padding:"10px",
                    backgroundColor:"#000",
                    cursor:"pointer",
                    borderRadius:"5px"
                }}/>
                <input type="text" style={{
                    margin:"20px"
                }} />
                <BsArrowDownUp style={{
                    padding:"10px",
                    backgroundColor:"#000",
                    cursor:"pointer",
                    borderRadius:"5px"
                }}/>
            </UpperWrapper>
           
                {contacts.map((contact) =>  <Contact contacts={contacts} first_name={contact.first_name} /> )}
            
        </Wrapper>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<R24App />)