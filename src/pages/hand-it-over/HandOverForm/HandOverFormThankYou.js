import React from 'react'
import Heading from '../../../components/DecorationHeading'
import {Link} from 'react-router-dom'

const HandOverFormThankYou = () => {

    return (
        <>
            <div className="thankyou-container">
                <Heading 
                    title="Dziękujemy za przesłanie formularza" 
                    title2="Na maila prześlemy wszelkie"
                    title3="informacje o odbiorze."/>
                <Link className="thankyou-bottom-link" to="/">Strona główna</Link>
            </div>
        </>)
}

export default HandOverFormThankYou;