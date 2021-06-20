import React, { useState } from "react";
import styled from "styled-components";
import HandOverButton from "./../../hand-it-over/HandOverButton"

import './handoverform.scss'

const HandOverFormStep4 = ( { goToStep }) => {
    
    return (
        <>
            <h2 style={{marginTop: "40px"}}>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
            <div className="step4-forms">
                <div>
                    <h3 className="step3-title-low" style={{marginTop: "40px"}}>Adres odbioru:</h3>
                    <div>
                        <form>
                            <label className="step4-form-item">Ulica
                                <input className="step4-input" type="text"></input>
                            </label>
                            <label className="step4-form-item">Miasto
                                <input className="step4-input" type="text"></input>
                            </label>
                            <label className="step4-form-item">Kod <br/> pocztowy
                                <input className="step4-input" type="text"></input>
                            </label>
                            <label className="step4-form-item">Numer <br/> telefonu
                                <input className="step4-input" type="text"></input>
                            </label>
                        </form>
                    </div>
                </div>
                <div>
                    <h3 className="step3-title-low" style={{marginTop: "40px"}}>Termin odbioru:</h3>
                    <div className="step4-form-item">
                        <form>
                            <label className="step4-form-item">Data
                                <input className="step4-input" type="text"></input>
                            </label>
                            <label className="step4-form-item">Godzina
                                <input className="step4-input" type="text"></input>
                            </label>
                            <label className="step4-form-item">Uwagi<br/> dla kuriera
                                <textarea className="step4-input" style={{resize: "none", overflow: "auto"}}></textarea>
                            </label>
                        </form>
                    </div>
                </div>
                
            </div>
            
            <div>
                <HandOverButton goToStep={goToStep} path="Wstecz" step={3}/>
                <HandOverButton goToStep={goToStep} path="Dalej" step={5}/>
            </div>
        </>
    );
}

export default HandOverFormStep4