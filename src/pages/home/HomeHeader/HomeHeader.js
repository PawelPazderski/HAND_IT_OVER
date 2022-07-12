import React, {useEffect, useState} from 'react'
import NavBottom from '../../../components/NavBottom'
import NavTop from '../../../components/NavTop'
import Heading from '../../../components/DecorationHeading'
import {Link} from 'react-router-dom'

import app from "../../../firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";

import './homeheader.scss'

const HomeHeader = () => {
    const [activeUser, setActiveUser] = useState(null) 

    useEffect(()=> {

        const auth = getAuth(app);
            const test = onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    // const uid = user.uid;
                    setActiveUser(user.email)
                    
                } else {
                    // User is signed out

                    setActiveUser(null)
                }
            });
            return () => test()

    },[activeUser])
    

    return (
    <>
        <div className="homeheader-container">
            <NavTop />
            <NavBottom />
            <div className="header-heading-container">
                <Heading title="Zacznij pomagać!" title2="Oddaj niechciane rzeczy w zaufane ręce"/>
                <div className="start-help">
                    <Link className="header-link" to= {activeUser ? "/hand-over" : "/login"}>Oddaj rzeczy</Link>
                    <Link className="header-link" to="/work-in-progress">Zorganizuj zbiórkę</Link>
                </div>
            </div>
        </div>
    </>)
}
    
export default HomeHeader;