// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from '../../fire'
import React, { useState, useEffect } from 'react'
import Heading from '../../components/DecorationHeading'
import NavTop from '../../components/NavTop'
import NavBottom from '../../components/NavBottom'
import {Link} from 'react-router-dom';
// import patterns from './../../components/Patterns'


import "firebase/auth";
import "firebase/firestore";

import './register.scss'



const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [emailErr, setEmailErr] = useState(false)
    const [passwordErr, setPasswordErr] = useState(false)
    const [passwordRepeatErr, setPasswordRepeatErr] = useState(false)
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

    const handleChangePasswordRepeat = (e) => {
        const newValueIsValid = !e.target.validity.patternMismatch; 

        if (passwordRepeatErr && newValueIsValid) {
            setPasswordRepeatErr(false);
        }
        setPasswordRepeat(e.target.value)
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

    const validatePasswordRepeat = (e) => {
        if (e.target.value !== password) {
            setPasswordRepeatErr(true)
        } else {
                setPasswordRepeatErr(false)
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

    const clearRegisterForm = () => {
        setEmail("")
        setPassword("")
        setPasswordRepeat("")
    }

    const addUser = (e) => {
        e.preventDefault()
        
        if (email.length && password.length && passwordRepeat.length && !emailErr && !passwordErr && !passwordRepeatErr) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                setLoggedUser(true)
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
                alert(error.message)
                // ..
            });
        }
        clearRegisterForm()
    }

    return (
    <>
        <NavTop />
        <NavBottom />
        <div className="register-container">
            <Heading title="Załóż konto"/>
                <div className="register-form-container">
                    <form className="register-form" onSubmit={addUser}>
                        <label>Email</label>
                            <input 
                                type="text"
                                value={email}
                                className={ emailErr ? "form-control-alert" : null}
                                onChange={handleChangeEmail}
                                onBlur={validateEmail}
                                onKeyPress={preventEnter}
                                pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$'
                            />
                            <h6  
                                className={ 
                                emailErr 
                                ? 
                                "contact-form-alert contact-form-email-alert" 
                                : 
                                "contact-form-alert contact-form-email-alert d-none"
                            }>
                                Podany email jest niepoprawny!
                            </h6>
                            <label>Hasło</label>
                            <input 
                                type={ showPassword ? "text" : "password"}
                                value={password}
                                className={ passwordErr ? "form-control-alert" : null}
                                onChange={handleChangePassword}
                                pattern="^\S{6,}$"
                                onBlur={validatePassword}
                                onKeyPress={preventEnter}
                            />
                            <h6 
                                className={ 
                                passwordErr 
                                ? 
                                "contact-form-alert contact-form-email-alert" 
                                : 
                                "contact-form-alert contact-form-email-alert d-none"
                            }>
                                Hasło musi mieć conajmniej 6 znaków!
                            </h6>
                            <label>Powtórz hasło</label>
                            <input 
                                type={ showPassword ? "text" : "password"}
                                value={passwordRepeat}
                                className={ passwordRepeatErr ? "form-control-alert" : null}
                                onChange={handleChangePasswordRepeat}
                                pattern={password}
                                onBlur={validatePasswordRepeat}
                                onKeyPress={preventEnter}
                            />
                        <button className="contact-form-info" onClick={handleShowPassword} >Pokaż hasło</button>
                        <h6 
                            className={ 
                            passwordRepeatErr 
                            ? 
                            "contact-form-alert contact-form-email-alert" 
                            : 
                            "contact-form-alert contact-form-email-alert d-none"
                            }>
                                Hasła musza być identyczne!
                        </h6>
                    </form>
                    
            </div>
            <ul>
                <li>
                    <Link className="bottom-link" to="/login">Zaloguj się</Link>
                </li>
                <li>
                    <Link className="bottom-link" onClick={addUser}>Załóż konto</Link>
                </li>
            </ul>
        </div>
    </>
    )
}

export default Register