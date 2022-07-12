import React from 'react'
import Heading from '../../components/DecorationHeading'
import {Link} from 'react-router-dom';

import './logout.scss'

const Logout = () => {

    return (
    <>
        <div className="logout-container">
            <Heading title="Wylogowanie nastąpiło" title2="pomyślnie!"/>
            <Link className="logout-bottom-link" to="/">Strona główna</Link>
        </div>
    </>)
}
    
export default Logout;