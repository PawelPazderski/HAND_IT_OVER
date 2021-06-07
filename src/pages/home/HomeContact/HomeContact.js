import React from 'react'
import DecorationHeading from '../../../components/DecorationHeading'
import "./homecontact.scss"
import HomeFooter from '../HomeFooter'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


const HomeContact = () => {
    return (
        <div id="kontakt" className="home-contact-container">
            <div className="home-contact-boxes">
                <div className="home-contact-box-left">
               </div>
                    <div className="home-contact-box-right">
                        <DecorationHeading title="Skontaktuj się z nami"/>
                        <div className="contact-form">
                        <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Wpisz swoje imię</Form.Label>
                                    <Form.Control type="text" placeholder="Krzysztof" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Podaj swój email</Form.Label>
                                    <Form.Control type="email" placeholder="abc@xyz.pl" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Wpisz swoją wiadomość</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Wyślij
                                </Button>
                        </Form>
                            {/* <form className="contact-form">
                                <div>
                                    <label>Wpisz swoje imię</label>
                                    <br/>
                                    <input type="text"></input>
                                </div>
                                <div>
                                    <label>Podaj swój email</label>
                                    <br/>
                                    <input type="email"></input>
                                </div>
                            </form> */}
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