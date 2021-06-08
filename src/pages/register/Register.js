import React from 'react'
import Heading from '../../components/DecorationHeading'
import NavTop from '../../components/NavTop'
import NavBottom from '../../components/NavBottom'
import {Link} from 'react-router-dom';

import './register.scss'


const Register = () => {

    return (
    <>
        <NavTop />
        <NavBottom />
        <div className="register-container">
           <Heading title="Załóż konto"/>
           <div className="register-form-container">
               <form className="register-form">
                   <label>Email</label>
                   <input type="email"></input>
                   <label>Hasło</label>
                   <input type="password"></input>
                   <label>Powtórz hasło</label>
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
    
export default Register