import React, {useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import LeftBar from "./LeftBar";


const Footer = observer(() => {


    return (
        <Container className="d-flex h-100 justify-content-center align-self-center">
        <nav style={{ paddingTop:"3%"}}>
            <div className="container">
                <Row>
                    <Col style={{maxWidth: '33%'}} >

                        Для предложений, сотрудничества и по другим вопросам:
                        <a className="navbar-brand" href="https://t.me/cyberbetonline" target="_blank">@cyberbetonline</a>
                        <a className="navbar-brand" href="https://www.twitch.tv/cyberbetonline" target="_blank">Twitch</a>
                        <a className="navbar-brand" href="https://discord.gg/F47Qx2Xp" target="_blank">Discord</a>

                            {/*<li className="list-unstyled">*/}
                            {/*    <a className="navbar-brand" href="https://www.facebook.com/kuntsevichsiarhei" target="_blank">facebook</a>*/}
                            {/*</li>*/}
                            {/*<li className="list-unstyled">*/}
                            {/*    <a className="navbar-brand" href="https://vk.com/socdempartyorg" target="_blank">vk.com</a>*/}
                            {/*</li>*/}

                    </Col>
                    <Col style={{maxWidth: '33%'}}>
                        <LeftBar/>
                    </Col>
                </Row>

            </div>
        </nav>
        </Container>
    );
})

export default Footer;
