import React, {useState, useEffect} from 'react'
import NavBottom from '../NavBottom'
import NavTop from '../NavTop'
import Link from 'react-router-dom'


const HomeHeader = () => {
  

    return (
    <>
        <div className="homeheader-container">
            
            <NavTop />
            <NavBottom />

            {/* <div className="start-help"></div> */}

        </div>
    </>)
}
    
export default HomeHeader