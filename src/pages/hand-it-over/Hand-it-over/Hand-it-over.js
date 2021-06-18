import React from 'react'
import HandOverHeader from "../HandOverHeader"
import HandOverForm from "../HandOverForm"
import HomeContact from '../../home/HomeContact'
import {Link} from 'react-router-dom';

import './hand-it-over.scss'



const HandOver = () => {

    return (
    <>
        <HandOverHeader />
        <HandOverForm />
        <HomeContact />
    </>
    )
}
    
export default HandOver