import React, {useState, useEffect} from 'react'
import Heading from '../../../components/DecorationHeading'
import {Link} from 'react-router-dom'

import HandOverFormStep1 from './HandOverFormStep1'
import HandOverFormStep2 from './HandOverFormStep2'
import './handoverform.scss'

const HandOverForm = () => {
    const [ step, setStep ] = useState(1)
    const [ stepInfo ] = useState([
        {info: "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."},
        {info: "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."},
        {info: "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."},
        {info: "Podaj adres oraz termin odbioru rzeczy."}
    ])
    const [type, setType] = useState("")
    const [bags, setBags] = useState("")

    const chooseType = (e) => {
        setType(e.target.value)
    }

    const chooseBags = (value) => {
        setBags(value);
    }

    const goToStep = (e) => {
        e.preventDefault()
        if (!type.length) {
            alert("Zaznacz jedną z opcji!")
            return
        }
        setStep(e.target.value)
        
    }

    return (
    <>
        { (step > 0 && step <= 4) 
            && 
            <div className="handover-yellow-belt">
                <h2>Ważne!</h2>
                {(step > 0 && step <= 4) && <h4>{stepInfo[step-1].info}</h4>}
            </div>
        }
        <div className="handover-form-container">
            { (step > 0 && step <= 4) && <h5>Krok {step}/4</h5> }
            { step == 1 && <HandOverFormStep1 type={type} goToStep={goToStep} chooseType={chooseType} />}
            { step == 2 && <HandOverFormStep2 bags={bags} goToStep={goToStep} chooseBags={chooseBags} />}
        </div>
    </>
    )
}
    
export default HandOverForm