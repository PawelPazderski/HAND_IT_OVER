import React from 'react'


import './handoverbutton.scss'

const HandOverButton = ( {path, step, goToStep} ) => {

    return (
        <button className="hand-over-form-button" value={step} onClick={goToStep}>{path}</button>
    )
}

export default HandOverButton