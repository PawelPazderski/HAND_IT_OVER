import React from 'react'
import NavBottom from '../../components/NavBottom'
import NavTop from '../../components/NavTop'
import Heading from '../../components/DecorationHeading'
import {Link} from 'react-router-dom';

import './hand-it-over.scss'



const HandOver = () => {

    return (
    <>
        <NavTop />
        <NavBottom />
        <Heading title="Oddaj rzeczy"/>
        <Link className="handover-bottom-link" to="/">Strona główna</Link>
    </>
    )
}
    
export default HandOver