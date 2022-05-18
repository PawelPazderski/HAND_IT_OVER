import React from 'react'
import HandOverButton from "./../../hand-it-over/HandOverButton"

import './handoverform.scss'

const HandOverFormStep1 = ( {chooseType, goToStep, type} ) => {

    return (
        <>
            <h1 className="hand-over-form-title">Zaznacz co chcesz oddać:</h1>
            <form>
                <label>
                    <h4>ubrania, które nadają się do ponownego użycia</h4>
                    <input 
                        className="step1-input" 
                        type="checkbox" name="step1" 
                        id="step1choice1" 
                        onChange={chooseType} 
                        value="ubrania - które nadają się do ponownego użycia" 
                        checked = {type.includes("ubrania - które nadają się do ponownego użycia")? true : false}
                    />
                    <span 
                        className={type === "ubrania, które nadają się do ponownego użycia" 
                            ? 
                            "checkmark checkmark-selected" 
                            : 
                            "checkmark"}>
                    </span>
                </label>
                <br />
                <label>
                    <h4>zabawki</h4>
                    <input 
                        className="step1-input" 
                        type="checkbox" 
                        name="step1" 
                        id="step1choice3" 
                        onChange={chooseType} 
                        value="zabawki"
                        checked = {type.includes("zabawki")? true : false}
                    />
                    <span className={type === "zabawki" ? "checkmark checkmark-selected" : "checkmark"}></span>
                </label>
                <br />
                <label>
                    <h4>książki</h4>
                    <input 
                        className="step1-input" 
                        type="checkbox" 
                        name="step1" 
                        id="step1choice4" 
                        onChange={chooseType} 
                        value="książki"
                        checked = {type.includes("książki")? true : false}
                    />
                    <span className={type === "książki" ? "checkmark checkmark-selected" : "checkmark"}></span>
                </label>
                <br />
                <label>
                    <h4>inne</h4>
                    <input 
                        className="step1-input" 
                        type="checkbox" 
                        name="step1" 
                        id="step1choice5" 
                        onChange={chooseType} 
                        value="inne"
                        checked = {type.includes("inne")? true : false}
                    />
                    <span className={type === "inne" ? "checkmark checkmark-selected" : "checkmark"}></span>
                </label>
            </form>
            <HandOverButton goToStep={goToStep} path="Dalej" step={2}/>
        </>
    )
}

export default HandOverFormStep1