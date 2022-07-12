import React, {useState, useEffect} from 'react'
import Heading from '../../../components/DecorationHeading'
import {Link} from 'react-router-dom';

import app from "../../../firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth";

import "./steps.scss"

const Steps = () => {
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
        
        return() => test()

    },[activeUser])

    return (
    <>
        <div id="o-co-chodzi" className="home-steps-container">
            <Heading title="Wystarczą 4 proste kroki"/>
            <div className="steps-blocks">
                <div className="step-block">
                    <div className="block-icon block-icon-01"></div>
                    <h3>Wybierz rzeczy</h3>
                    <hr/>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="step-block">
                    <div className="block-icon block-icon-02"></div>
                    <h3>Spakuj je</h3>
                    <hr/>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="step-block">
                    <div className="block-icon block-icon-03"></div>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <hr/>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="step-block">
                    <div className="block-icon block-icon-04"></div>
                    <h3>Zamów kuriera</h3>
                    <hr/>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Link className="steps-link" to={ activeUser ? "/hand-over" : "/login" }>Oddaj rzeczy</Link>
        </div>
    </>)
}
    
export default Steps