import React from 'react'
import Heading from '../../components/DecorationHeading'
import NavTop from '../../components/NavTop'
import NavBottom from '../../components/NavBottom'
import {Link} from 'react-router-dom';

import './logout.scss'

const Logout = () => {

    return (
    <>
        {/* <NavTop />
        <NavBottom /> */}
        <div className="logout-container">
           <Heading title="Wylogowanie nastąpiło" title2="pomyślnie!"/>
           <Link className="logout-bottom-link" to="/">Strona główna</Link>
        </div>
    </>)
}
    
export default Logout