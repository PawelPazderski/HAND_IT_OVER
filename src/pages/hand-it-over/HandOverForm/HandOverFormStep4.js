import React, { useState } from "react";
import styled from "styled-components";
import HandOverButton from "./../../hand-it-over/HandOverButton"

import './handoverform.scss'

const HandOverFormStep4 = ( { goToStep, clearAddressError, handleAddress, handleAddressError, handleTerm, address, term }) => {
    
    const validateStreet = (e) => {
        if (e.target.validity.patternMismatch) {
            alert("Ulica conajmniej 2 znaki (tylko litery oraz cyfry).")
            handleAddressError(e.target.name)
        } else {
            clearAddressError(e.target.name)
        }
    }

    const validateCity = (e) => {
        if (e.target.validity.patternMismatch) {
            alert("Miasto minimum 2 znaki (tylko litery).")
            handleAddressError(e.target.name)
        } else {
            clearAddressError(e.target.name)
        }
    }

    const validatePostCode = (e) => {
        if (e.target.validity.patternMismatch) {
            alert("Niewłaściwy kod (przykład: 82-300).")
            handleAddressError(e.target.name)
        } else {
            clearAddressError(e.target.name)
        }
    }

    const validatePhone = (e) => {
        if (e.target.validity.patternMismatch) {
            alert("Numer powinien się składać z 9 cyfr.")
            handleAddressError(e.target.name)
        } else {
            clearAddressError(e.target.name)
        }
    }

    return (
        <>
            <h2 style={{marginTop: "40px"}}>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
            <div className="step4-forms">
                <div>
                    <h3 className="step3-title-low" style={{marginTop: "40px"}}>Adres odbioru:</h3>
                    <div>
                        <form>
                            <label className="step4-form-item">Ulica, nr
                                <input 
                                    value={address.street}
                                    className="step4-input" 
                                    name="street" 
                                    type="text" 
                                    pattern="^[A-ZĄĘŁÓŻŹŚĆa-ząęłóżźćśń0-9\s]{2,}$" 
                                    onBlur={validateStreet} 
                                    onChange={handleAddress}></input>
                            </label>
                            <label className="step4-form-item">Miasto
                                <input 
                                    className="step4-input" 
                                    name="city"
                                    value={address.city} 
                                    type="text" 
                                    pattern="^[A-ZĄĘŁÓŻŹŚĆa-ząęłóżźćśń\s]{2,}$" 
                                    onBlur={validateCity} 
                                    onChange={handleAddress}></input>
                            </label>
                            <label className="step4-form-item">Kod <br/> pocztowy
                                <input 
                                    className="step4-input" 
                                    name="postCode" 
                                    type="text"
                                    value={address.postCode} 
                                    pattern="\d{2}-\d{3}" 
                                    onBlur={validatePostCode} 
                                    onChange={handleAddress}></input>
                            </label>
                            <label className="step4-form-item">Numer <br/> telefonu
                                <input 
                                    className="step4-input" 
                                    name="phone"
                                    value={address.phone} 
                                    type="text" 
                                    pattern="\d{9}" 
                                    onBlur={validatePhone} 
                                    onChange={handleAddress}></input>
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
                                    name="date"
                                    value={term.date}
                                    className="step4-input" 
                                    type="date" 
                                    onChange={handleTerm}></input>
                            </label>
                            <label className="step4-form-item">Godzina
                                <input
                                    name="time"
                                    value={term.time} 
                                    className="step4-input" 
                                    type="time" 
                                    onChange={handleTerm}></input>
                            </label>
                            <label className="step4-form-item">Uwagi<br/> dla kuriera<br/>(opcjonalnie)
                                <textarea 
                                    maxLength="120"
                                    rows="6"
                                    name="note"
                                    value={term.note}
                                    className="step4-input" 
                                    onChange={handleTerm} 
                                    style={{resize: "none", overflow: "auto", fontSize: "1rem", lineHeight: "1.5rem"}}></textarea>
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