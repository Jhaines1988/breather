import React, { useState, useEffect, useRef } from 'react';



const Login = function(props) {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const loginHandler = props.loginHandler

    const submitUserCredentials = function(e){
        e.preventDefault()

        console.log('refs',firstNameRef.current.value,lastNameRef,emailRef,passwordRef)

        const body = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            password:passwordRef.current.value
        }

            loginHandler(body)

    }
    return (
        <form onSubmit={submitUserCredentials}>
            <label>First Name</label>
            <input ref={firstNameRef}></input>
            <label>Last Name</label>
            <input ref={lastNameRef}></input>
            <label>Email</label>
            <input ref={emailRef}></input>
            <label>Password</label>
            <input ref={passwordRef}></input>
            <button type='submit'>Submit</button>
        </form>
    )
}


export default Login