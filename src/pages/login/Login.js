import firebase from '../../fire'
import React, { useState, useEffect } from 'react'
import Heading from '../../components/DecorationHeading'
import NavTop from '../../components/NavTop'
import NavBottom from '../../components/NavBottom'
import {Link} from 'react-router-dom';

import "firebase/auth";
import "firebase/firestore";

import './login.scss'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)
    const [loggedUser, setLoggedUser] = useState(false)


    useEffect(()=>{
        if (loggedUser) {
            window.location.assign('http://localhost:3000/')
        }

    },[loggedUser])
    

    const handleChangePassword = (e) => {
        const newValueIsValid = !e.target.validity.patternMismatch;

        if (passwordErr && newValueIsValid) {
                setPasswordErr(false);
        }
        setPassword(e.target.value)
    }

    const handleChangeEmail = (e) => {
        const newValueIsValid = !e.target.validity.patternMismatch;

        if (emailErr && newValueIsValid) {
                setEmailErr(false);
        }
        setEmail(e.target.value)
    }

    const validatePassword = (e) => {
        if (e.target.validity.patternMismatch) {
            setPasswordErr(true)
        } else {
            setPasswordErr(false)
            }
    }

    const validateEmail = (e) => {
        if (e.target.validity.patternMismatch) {
            setEmailErr(true)
        } else {
            setEmailErr(false)
            }
    }

    const handleShowPassword = (e) => {
        e.preventDefault()
        setShowPassword(prev => !prev)
    } 

    const preventEnter = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault()
        }
    }

    const loginUser = () => {
        if (email.length && password.length && !emailErr && !passwordErr) {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
              // Signed in
                var user = userCredential.user;
              // ...
                setLoggedUser(true)
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
            });
            
        }
        setEmail("")
        setPassword("")
    }

    return (
    <>
        <NavTop />
        <NavBottom />
        <div className="login-container">
            <Heading title="Zaloguj się"/>
                <div className="login-form-container">
                    <form className="login-form">
                        <label>Email</label>
                        <input 
                            type="text"
                            value={email}
                            className={ emailErr ? "form-control-alert" : null}
                            onChange={handleChangeEmail}
                            onBlur={validateEmail}
                            onKeyPress={preventEnter}
                            pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$'
                        ></input>
                        <h6 className={ emailErr ? "contact-form-alert contact-form-email-alert" : "contact-form-alert contact-form-email-alert d-none"}>Podany email jest niepoprawny!</h6>
                        <label>Hasło</label>
                        <input 
                            type={ showPassword ? "text" : "password"}
                            value={password}
                            className={ passwordErr ? "form-control-alert" : null}
                            onChange={handleChangePassword}
                            pattern="^\S{6,}$"
                            onBlur={validatePassword}
                            onKeyPress={preventEnter}
                        ></input>
                        <button className="contact-form-info" onClick={handleShowPassword} >Pokaż hasło</button>
                        <h6 className={ passwordErr ? "contact-form-alert contact-form-email-alert" : "contact-form-alert contact-form-email-alert d-none"}>Hasło musi mieć conajmniej 6 znaków!</h6>
                    </form>
                </div>
            <ul>
                <li>
                    <Link className="bottom-link" to="/register">Załóż konto</Link>
                </li>
                <li>
                    <Link className="bottom-link" onClick={loginUser}>Zaloguj się</Link>
                </li>
                
            </ul>
        </div>
    </>
    )
}

export default Login