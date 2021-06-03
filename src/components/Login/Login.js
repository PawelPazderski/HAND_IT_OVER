import React, {useState, useEffect} from 'react'
import Heading from '../Heading'
import NavTop from '../NavTop'
import NavBottom from '../NavBottom'
import {Link} from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';


const Login = () => {

    return (
    <>
        <NavTop />
        <NavBottom />
        <div className="login-container">
           <Heading title="Zaloguj się"/>
           <div className="login-form-container">
               <form className="login-form">
                   <label>Email</label>
                   <input type="email"></input>
                   <label>Hasło</label>
                   <input type="password"></input>
               </form>
           </div>
        </div>
    </>)
}
    
export default Login