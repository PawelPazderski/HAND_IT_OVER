import React from 'react'
import NavBottom from '../../../components/NavBottom'
import NavTop from '../../../components/NavTop'
import Heading from '../../../components/DecorationHeading'

import './handoverheader.scss'

const HandOverHeader = () => {

    return (
    <>
        <div className="handover-header-container">
            <NavTop />
            <NavBottom />
            <div className="handover-heading-container">
                <Heading title="Oddaj rzeczy, których już nie chcesz" title2=" POTRZEBUJĄCYM"/>
                <div className="header-four-steps">
                    <h1 className="header-four-steps-title">Wystarczą 4 proste kroki:</h1>
                    <div className="steps-container">
                        <div className="steps-item">
                            <h5>1</h5>
                            <h6>Wybierz rzeczy</h6>
                        </div>
                        <div className="steps-item">
                            <h5>2</h5>
                            <h6>Spakuj je<br/> w worki</h6>
                        </div>
                        <div className="steps-item">
                            <h5>3</h5>
                            <h6>Wybierz<br/>fundację</h6>
                        </div>
                        <div className="steps-item">
                            <h5>4</h5>
                            <h6>Zamów<br/>kuriera</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
    
export default HandOverHeader