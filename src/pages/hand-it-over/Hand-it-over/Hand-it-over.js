import React, { useEffect } from 'react'
import HandOverHeader from "../HandOverHeader"
import HandOverForm from "../HandOverForm"
import HomeContact from '../../home/HomeContact'


const HandOver = () => {

    useEffect(()=> {
        window.scrollTo(0, 0)
    },[])

    return (
    <>
        <HandOverHeader />
        <HandOverForm />
        <HomeContact />
    </>
    )
}
    
export default HandOver;