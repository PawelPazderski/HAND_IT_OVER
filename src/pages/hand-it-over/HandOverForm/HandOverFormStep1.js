import React, {useState, useEffect} from 'react'
import Heading from '../../../components/DecorationHeading'
import {Link} from 'react-router-dom'

import HandOverButton from "./../../hand-it-over/HandOverButton"

import './handoverform.scss'

const HandOverFormStep1 = ( {chooseType, goToStep, type} ) => {

    return (
        <>
            <h1>Zaznacz co chcesz oddać:</h1>
            <form>
                <label>
                    <h4>ubrania, które nadają się do ponownego użycia</h4>
                    <input className="step1-input" type="radio" name="step1" id="step1choice1" onChange={chooseType} value="ubrania, które nadają się do ponownego użycia"></input>
                    <span className={type === "ubrania, które nadają się do ponownego użycia" ? "checkmark checkmark-selected" : "checkmark"}></span>
                </label>
                <br />
                <label>
                    <h4>ubrania, do wyrzucenia</h4>
                    <input className="step1-input" type="radio" name="step1" id="step1choice2" onChange={chooseType} value="ubrania, do wyrzucenia"></input>
                    <span className={type === "ubrania, do wyrzucenia" ? "checkmark checkmark-selected" : "checkmark"}></span>
                </label>
                <br />
                <label>
                    <h4>zabawki</h4>
                    <input className="step1-input" type="radio" name="step1" id="step1choice3" onChange={chooseType} value="zabawki"></input>
                    <span className={type === "zabawki" ? "checkmark checkmark-selected" : "checkmark"}></span>
                </label>
                <br />
                <label>
                    <h4>książki</h4>
                    <input className="step1-input" type="radio" name="step1" id="step1choice4" onChange={chooseType} value="książki"></input>
                    <span className={type === "książki" ? "checkmark checkmark-selected" : "checkmark"}></span>
                </label>
                <br />
                <label>
                    <h4>inne</h4>
                    <input className="step1-input" type="radio" name="step1" id="step1choice5" onChange={chooseType} value="inne"></input>
                    <span className={type === "inne" ? "checkmark checkmark-selected" : "checkmark"}></span>
                </label>
            </form>
            <HandOverButton goToStep={goToStep} path="Dalej" step={2}/>
        </>
    )
}

export default HandOverFormStep1