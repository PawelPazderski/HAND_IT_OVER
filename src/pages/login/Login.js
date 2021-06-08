import React from 'react'
import Heading from '../../components/DecorationHeading'
import NavTop from '../../components/NavTop'
import NavBottom from '../../components/NavBottom'
import {Link} from 'react-router-dom';

import './login.scss'


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
           <ul>
               <li>
                   <Link className="bottom-link" to="/login">Zaloguj się</Link>
               </li>
               <li>
                   <Link className="bottom-link" to="/register">Załóż konto</Link>
               </li>
           </ul>
        </div>
    </>)
}
    
export default Login