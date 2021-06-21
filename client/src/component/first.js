import React, { useRef } from 'react'
import { Redirect } from 'react-router-dom'

export default function First() {
    const nameRef = useRef('')
    const ageRef = useRef('')
    const cityRef = useRef('')
    const adressRef = useRef('')
    const mailRef = useRef('')
    const phoneRef = useRef('')
    function addUser() {
        dispatch(actions.addOneUser({ name: nameRef.current.value, age: ageRef.current.value, city: cityRef.current.value, adress: adressRef.current.value, mail: mailRef.current.value, phone: phoneRef.current.value }))
    }
    return (
        <>
            <input type="text" ref={nameRef} placeholder="שם מלא"></input>
            <input type="number" ref={ageRef} placeholder="גיל"></input>
            <input type="text" ref={cityRef} placeholder="עיר"></input>
            <input type="text" ref={adressRef} placeholder="מגורים"></input>
            <input type="email" ref={nameRef} placeholder="מייל"></input>
            <input type="text" ref={phoneRef} placeholder="פון"></input>
            <button onClick={addUser}></button>
        </>
    )
}
