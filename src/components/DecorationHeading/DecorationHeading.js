import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

import "./decorationheading.scss"
// import { HashLink } from 'react-router-hash-link';


const Heading = ({title, title2}) => {

    return (
    <>
        <div className="heading-container">
           <h1 className="heading-title">{title}</h1>
           {title2 && <h1 className="heading-title">{title2}</h1>}
           <div className="decoration-item"></div>
        </div>
    </>)
}
    
export default Heading