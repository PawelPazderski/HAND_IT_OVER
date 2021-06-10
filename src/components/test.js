fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
  method: "POST",
  body: JSON.stringify(contact),
  headers: {
    "Content-Type": "application/json"
  }
});


async function contactTest() {
    setContact(prev => {
    return {
    ...prev,
    name: `${name}`,
    email: `${email}`,
    message: `${message}`
    }
})


fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
            "Content-Type": "application/json"
        }
        });


        import React, { useState, useEffect } from 'react'
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
    const [formError, setFormError] = useState([])
    const [contact, setContact] = useState({})
    const [sendMessage, setSendMessage] = useState(false)

    const validateEmail = (email) => {
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email)
    }
    
    const validateName = (name) => {
        const reg = /^[A-ZĄĘŁÓŻŹŚĆa-ząęłóżźćś]+$/;
        return reg.test(name)
    }

    const clearForm = () => {
        setName("")
        setEmail("")
        setMessage("")
        setFormError([])
    }

    const sendForm = () => {
        if (sendMessage) {
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
            method: "POST",
            body: JSON.stringify(contact),
            headers: {
                "Content-Type": "application/json"
            }
            });
            setSendMessage(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //use Ref
        //lepiej warunkowo na bazie stanu
        //queryselektory spowalniają
        const formSuccess = document.querySelector(".contact-form-success")
        const nameAlert = document.querySelector(".contact-form-name-alert")
        const nameInput = document.querySelector(".contact-name-input")
        const emailAlert = document.querySelector(".contact-form-email-alert")
        const emailInput = document.querySelector(".contact-email-input")
        const messageAlert = document.querySelector(".contact-form-message-alert")
        const messageInput = document.querySelector(".contact-message-input")
        const errors = []

        const hideSuccess = () => {
            formSuccess.classList.add("d-none")
        }

        if ((validateName(name) === false) || !name.length || name.length < 2) {
            errors.push('Błędne imię')
            nameAlert.classList.remove("d-none")
            nameInput.classList.add("form-control-alert")
            
        } else {
            nameAlert.classList.add("d-none")
            nameInput.classList.remove("form-control-alert")
            errors.length && errors.filter(prev => prev !== 'Błędne imię')
            setContact(prev => {
                return {
                ...prev,
                name: `${name}`
                }
            })
            
        }

        if (validateEmail(email) === false) {
            errors.push('Błędny email')
            emailAlert.classList.remove("d-none")
            emailInput.classList.add("form-control-alert")
            
        } else {
            emailAlert.classList.add("d-none")
            emailInput.classList.remove("form-control-alert")
            errors.length && errors.filter(prev => prev !== 'Błędny email')
            setContact(prev => {
                return {
                ...prev,
                email: `${email}`
                }
            })
        }
        
        if (message.length < 120) {
            errors.push('Za krótka wiadomość')
            messageAlert.classList.remove("d-none")
            messageInput.classList.add("form-control-alert")
        } else {
            messageAlert.classList.add("d-none")
            messageInput.classList.remove("form-control-alert")
            errors.length && errors.filter(prev => prev !== 'Za krótka wiadomość')
            setContact(prev => {
                return {
                ...prev,
                message: `${message}`
                }
            })
        }

        if (errors.length) {
            formSuccess.classList.add("d-none")
            return
        } else {
            setSendMessage(true)
            
        }
        
        formSuccess.classList.remove("d-none")
        setTimeout(hideSuccess, 3000)
    }

    // useEffect(()=> {
    //     sendForm()
    //     clearForm()
    // },[sendMessage])

    return (
        <>
        <div id="kontakt" className="home-contact-container">
            <div className="home-contact-boxes">
                <div className="home-contact-box-left">
               </div>
                    <div className="home-contact-box-right">
                        <DecorationHeading title="Skontaktuj się z nami"/>
                        <h6 className="contact-form-alert contact-form-success d-none">Wiadomość została wysłana!<br/>Wkrótce się z Tobą skontaktujemy.</h6>
                        <div className="contact-form">
                        <Form onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Wpisz swoje imię</Form.Label>
                                    <Form.Control className="contact-name-input" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Krzysztof" />
                                    <h6 className="contact-form-alert contact-form-name-alert d-none">Podane imię jest nieprawidłowe!</h6>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Podaj swój email</Form.Label>
                                    <Form.Control className="contact-email-input" type="text" placeholder="abc@xyz.pl" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                    <h6 className="contact-form-alert contact-form-email-alert d-none">Podany email jest niepoprawny!</h6>
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Wpisz swoją wiadomość</Form.Label>
                                    <Form.Control className="contact-message-input" as="textarea" rows={3} value={message} onChange={(e)=>{setMessage(e.target.value)}} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco." />
                                    <h6 className="contact-form-alert contact-form-message-alert d-none">Wiadomość musi mieć conajmniej 120 znaków! (Obecnie: {message.length} znaków.)</h6>
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