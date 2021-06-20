import React, { useState } from "react";
import styled from "styled-components";
import HandOverButton from "./../../hand-it-over/HandOverButton"

import './handoverform.scss'

const HandOverFormSummary = ( { goToStep, address, term, type, bags, helpGroups, localization, specificOrg }) => {

    return (
        <>
            <h2 style={{marginTop: "40px"}}>Podsumowanie Twojej darowizny</h2>
            <h3 className="step3-title-low" style={{marginTop: "40px"}}>Oddajesz:</h3>
            <div className="summary-items">
                <div className="summary-icon-1"></div>
                <h4 style={{marginLeft: "25px", marginTop: "5px"}}>worki: {bags}, przekazuję: {type}, chcę pomóc: {helpGroups.join(", ")}</h4>
            </div>
            <div className="summary-items">
                <div className="summary-icon-2"></div>
                <h4 
                    style={{marginLeft: "25px", marginTop: "5px"}}>
                    { localization ? `lokalizacja: ${localization}, ` : null }
                </h4>
                <h4 
                    style={{marginLeft: "5px",marginTop: "5px"}}>
                    { specificOrg ? `organizacja: ${specificOrg}` : null }
                </h4>
            </div>
            <div className="summary-localization"></div>
            <div className="step4-forms">
                <div>
                    <h3 className="step3-title-low" style={{marginTop: "40px"}}>Adres odbioru:</h3>
                    <div>
                        <form>
                            <label className="step4-form-item">Ulica, nr
                                <input
                                    style={{border: "none"}} 
                                    value={address.street}
                                    disabled
                                    className="step4-input" 
                                    name="street" 
                                    type="text"></input>
                            </label>
                            <label className="step4-form-item">Miasto
                                <input
                                    value={address.city}
                                    style={{border: "none"}}
                                    disabled 
                                    className="step4-input" 
                                    name="city" 
                                    type="text"></input>
                            </label>
                            <label className="step4-form-item">Kod <br/> pocztowy
                                <input
                                    value={address.postCode} 
                                    disabled
                                    style={{border: "none"}}
                                    className="step4-input" 
                                    name="postCode" 
                                    type="text" ></input>
                            </label>
                            <label className="step4-form-item">Numer <br/> telefonu
                                <input
                                    value={address.phone}
                                    disabled
                                    style={{border: "none"}}
                                    className="step4-input" 
                                    name="phone" 
                                    type="text" ></input>
                            </label>
                        </form>
                    </div>
                </div>
                <div>
                    <h3 className="step3-title-low" style={{marginTop: "40px"}}>Termin odbioru:</h3>
                    <div className="step4-form-item">
                        <form>
                            <label className="step4-form-item">Data
                                <input
                                    disabled
                                    style={{border: "none"}}
                                    value={term.date}
                                    name="date"
                                    className="step4-input" 
                                    type="date"></input>
                            </label>
                            <label className="step4-form-item">Godzina
                                <input
                                    disabled
                                    style={{border: "none"}}
                                    value={term.time}
                                    name="time" 
                                    className="step4-input" 
                                    type="time"></input>
                            </label>
                            <label className="step4-form-item">Uwagi<br/> dla kuriera
                                <textarea 
                                    disabled
                                    rows="6"
                                    value={term.note}
                                    name="note"
                                    className="step4-input"  
                                    style={{resize: "none", overflow: "auto", border: "none", fontSize: "1rem", lineHeight:"1.5rem"}}></textarea>
                            </label>
                        </form>
                    </div>
                </div>
                
            </div>
            
            <div>
                <HandOverButton goToStep={goToStep} path="Wstecz" step={4}/>
                <HandOverButton goToStep={goToStep} path="Potwierdzam" step={6}/>
            </div>
        </>
    );
}

export default HandOverFormSummary