import React from 'react'
import Heading from '../../components/DecorationHeading'
import {Link} from 'react-router-dom';

import './work-in-progress.scss'

const WorkInProgress = () => {

    return (
    <>
        {/* <NavTop />
        <NavBottom /> */}
        <div className="logout-container">
           <Heading title="Trwają prace nad stroną." title2="Przepraszamy."/>
           <Link className="logout-bottom-link" to="/">Strona główna</Link>
        </div>
    </>)
}
    
export default WorkInProgress