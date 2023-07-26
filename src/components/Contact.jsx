import React from 'react'
import { ContactWrapper } from './r24.styled'


export default function Contact( { contacts, first_name}) {

    const avatarsList = [
        "adventurer","adventurer-neutral","avataaars","avataaars-neutral","big-ears","big-ears-neutral","big-smile","bottts","bottts-neutral","croodles","croodles-neutral","fun-emoji","icons","identicon","initials","lorelei","lorelei-neutral","micah","miniavs","notionists","notionists-neutral","open-peeps","personas","pixel-art","pixel-art-neutral","shapes","thumbs"]
    const randomIco = avatarsList[Math.floor(Math.random()*27)]
    const url = `https://api.dicebear.com/6.x/${randomIco}/svg`
    
    return (
    <ContactWrapper>
        <img src={`${url}`} alt="ico" style={{
            width:"50px",
            height:"50px"
        }}/>
        <span>{first_name}</span>
        <span>{contacts.last_name}</span>
        <span>{contacts.email}</span>
        <span>{contacts.phone}</span>

    </ContactWrapper>
  )
}
