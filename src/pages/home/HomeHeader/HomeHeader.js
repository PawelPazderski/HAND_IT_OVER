import React from 'react'
import NavBottom from '../../../components/NavBottom'
import NavTop from '../../../components/NavTop'
import Heading from '../../../components/DecorationHeading'
import {Link} from 'react-router-dom'

import './homeheader.scss'

const HomeHeader = () => {

    return (
    <>
        <div className="homeheader-container">
            <NavTop />
            <NavBottom />
            <div className="header-heading-container">
                <Heading title="Zacznij pomagać!" title2="Oddaj niechciane rzeczy w zaufane ręce"/>
                <div className="start-help">
                    <Link className="header-link" to="/login">Oddaj rzeczy</Link>
                    <Link className="header-link" to="/login">Zorganizuj zbiórkę</Link>
                </div>
            </div>
        </div>
    </>)
}
    
export default HomeHeader