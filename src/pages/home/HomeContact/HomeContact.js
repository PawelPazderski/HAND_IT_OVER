import React, { useState } from 'react'
import DecorationHeading from '../../../components/DecorationHeading'
import "./homecontact.scss"
import HomeFooter from '../HomeFooter'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const regName = /^[A-ZĄĘŁÓŻŹŚĆa-ząęłóżźćś]+$/
const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/

const HomeContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [sendMessage, setSendMessage] = useState(false)

    const preventEnter = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault()
        }
    }

    const handleNameChange = (e) => {
        e.preventDefault();
        setName(e.target.value)
        console.log(regName.test(e.target.value))
            if ((regName.test(e.target.value)) === true && e.target.value.length >= 2) {
                setNameError(false)
            } else {
                setNameError(true)
                return
            }
    }

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
        console.log(regName.test(e.target.value))
            if ((regEmail.test(e.target.value)) === true) {
                setEmailError(false)
            } else {
                setEmailError(true)
                return
            }
    }

    const handleChangeMessage = (e) => {
        setMessage(e.target.value)
            if (e.target.value.length < 120) {
                setMessageError(true)
            } else {
                setMessageError(false) 
            }
    }

    const clearForm = () => {
        setName("")
        setEmail("")
        setMessage("")
    }

    const hideSuccess = () => {
        setSendMessage(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.length && email.length && message.length && !nameError && !emailError && !messageError) {
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify({
                name: `${name}`,
                email: `${email}`,
                message: `${message}`
            }),
            headers: {
                "Content-Type": "application/json"
            }
            });

            clearForm()
            setSendMessage(true)
            setTimeout(hideSuccess, 3000)
        } else {
            alert("Wszystkie pola muszą być poprawnie wypełnione!")
            return
        }
    }

    return (
        <>
        <div id="kontakt" className="home-contact-container">
            <div className="home-contact-boxes">
                <div className="home-contact-box-left">
                </div>
                <div className="home-contact-box-right">
                        <DecorationHeading title="Skontaktuj się z nami"/>
                        <h6 className={ sendMessage ? "contact-form-alert contact-form-success" : "contact-form-alert contact-form-success d-none"}>Wiadomość została wysłana!<br/>Wkrótce się z Tobą skontaktujemy.</h6>
                        <div className="contact-form">
                        <Form onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Wpisz swoje imię</Form.Label>
                                    <Form.Control
                                        onKeyPress={preventEnter}
                                        className={ nameError ? "contact-name-input form-control-alert" : "contact-name-input"} 
                                        type="text" value={name} 
                                        onChange={handleNameChange} 
                                        placeholder="Krzysztof" />
                                        <h6 className={ nameError ? "contact-form-alert contact-form-name-alert" : "contact-form-alert contact-form-name-alert d-none"}>Podane imię jest nieprawidłowe!</h6>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Podaj swój email</Form.Label>
                                    <Form.Control 
                                        onKeyPress={preventEnter}
                                        className={ emailError ? "contact-email-input form-control-alert" : "contact-email-input"} 
                                        type="text" 
                                        placeholder="abc@xyz.pl" 
                                        value={email} 
                                        onChange={handleEmailChange}/>
                                        <h6 className={ emailError ? "contact-form-alert contact-form-email-alert" : "contact-form-alert contact-form-email-alert d-none"}>Podany email jest niepoprawny!</h6>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Wpisz swoją wiadomość</Form.Label>
                                    <Form.Control 
                                        className={ messageError ? "contact-message-input form-control-alert" : "contact-message-input"}
                                        as="textarea" rows={3} value={message} 
                                        onChange={handleChangeMessage} 
                                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
                                        <h6 className={ messageError ? "contact-form-alert contact-form-message-alert" : "contact-form-alert contact-form-message-alert d-none"}>Wiadomość musi mieć conajmniej 120 znaków! (Obecnie: {message.length} znaków.)</h6>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Wyślij
                                </Button>
                        </Form>
                        </div>
                    </div>
                </div>
                <div className="footer-container">
                    <HomeFooter />
                </div>
            </div>
        </>
    )
}

export default HomeContact