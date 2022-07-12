import React from 'react'
import Heading from '../../../components/DecorationHeading'
import {Link} from 'react-router-dom'

const HandOverFormThankYou = () => {

    return (
        <>
            <div className="thankyou-container">
                <Heading 
                    title="Dziękujemy za przesłanie formularza" 
                    title2="Wkrótce się z Tobą"
                    title3="skontaktujemy."/>
                <Link className="thankyou-bottom-link" to="/">Strona główna</Link>
            </div>
        </>)
}

export default HandOverFormThankYou;