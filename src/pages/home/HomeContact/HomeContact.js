import React, { useState } from 'react'
import DecorationHeading from '../../../components/DecorationHeading'
import "./homecontact.scss"
import HomeFooter from '../HomeFooter'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


const HomeContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(email))
        return re.test(email)
    }
    
    const validateName = (name) => {
        const re = /^[A-ZĄĘŁÓŻŹŚĆa-ząęłóżźćś]+$/;
        console.log(re.test(name))
        return re.test(name)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const nameAlert = document.querySelector(".contact-form-name-alert")
        const nameInput = document.querySelector(".contact-name-input")
        const emailAlert = document.querySelector(".contact-form-email-alert")
        const emailInput = document.querySelector(".contact-email-input")
        const messageAlert = document.querySelector(".contact-form-message-alert")
        const messageInput = document.querySelector(".contact-message-input")
        const errors = []

        if ((validateName(name) === false) || !name.length || name.length < 2) {
            errors.push('Błędne imię')
            nameAlert.classList.remove("d-none")
            nameInput.classList.add("form-control-alert")
            
        } else {
            nameAlert.classList.add("d-none")
            nameInput.classList.remove("form-control-alert")
            errors.length && errors.filter(prev => prev !== 'Błędne imię')
        }

        if (validateEmail(email) === false) {
            errors.push('Błędny email')
            emailAlert.classList.remove("d-none")
            emailInput.classList.add("form-control-alert")
            
        } else {
            emailAlert.classList.add("d-none")
            emailInput.classList.remove("form-control-alert")
            errors.length && errors.filter(prev => prev !== 'Błędny email')
        }
        
        if (message.length < 120) {
            errors.push('Za krótka wiadomość')
            messageAlert.classList.remove("d-none")
            messageInput.classList.add("form-control-alert")
        } else {
            messageAlert.classList.add("d-none")
            messageInput.classList.remove("form-control-alert")
            errors.length && errors.filter(prev => prev !== 'Za krótka wiadomość')
        }
        console.log(name, email, message)
        console.log(errors)
    }


    return (
        <div id="kontakt" className="home-contact-container">
            <div className="home-contact-boxes">
                <div className="home-contact-box-left">
               </div>
                    <div className="home-contact-box-right">
                        <DecorationHeading title="Skontaktuj się z nami"/>
                        <div className="contact-form">
                        <Form onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Wpisz swoje imię</Form.Label>
                                    <Form.Control className="contact-name-input" type="text" value={name} onChange={handleNameChange} placeholder="Krzysztof" />
                                    <h6 className="contact-form-alert contact-form-name-alert d-none">Podane imię jest nieprawidłowe!</h6>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Podaj swój email</Form.Label>
                                    <Form.Control className="contact-email-input" type="text" placeholder="abc@xyz.pl" value={email} onChange={handleEmailChange}/>
                                    <h6 className="contact-form-alert contact-form-email-alert d-none">Podany email jest niepoprawny!</h6>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Wpisz swoją wiadomość</Form.Label>
                                    <Form.Control className="contact-message-input" as="textarea" rows={3} value={message} onChange={handleMessageChange} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                                    <h6 className="contact-form-alert contact-form-message-alert d-none">Wiadomość musi mieć conajmniej 120 znaków! (Brakuje {120 - message.length} znaków.)</h6>
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
    )
}

export default HomeContact