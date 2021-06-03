import React, {useState, useEffect} from 'react'
import NavBottom from '../NavBottom'
import NavTop from '../NavTop'
import Heading from '../Heading'
import {Link} from 'react-router-dom'


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