import React from 'react'
import Heading from '../../../components/DecorationHeading'
import {Link} from 'react-router-dom';

import "./steps.scss"

const Steps = () => {

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
            <Link className="steps-link" to="/login">Oddaj rzeczy</Link>
        </div>
    </>)
}
    
export default Steps