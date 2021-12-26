import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, ADMIN_SETTINGS, QIWI_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import CreateDevice from "./modals/CreateDevice";
import CreateQiwi from "./modals/CreateQiwi";

const NavBar = observer(() => {
    const {device, user, userdata} = useContext(Context)
    const history = useHistory()

    const [deviceVisible, setDeviceVisible] = useState(false)

    const logOut = () => {
        wsClosed()
        localStorage.removeItem('token')
        userdata.setUserData([])
        user.setUser({})
        user.setIsAuth(false)
        history.push(SHOP_ROUTE)
    }


    // const viewHome = () => {
    //     window.open('https://cyberbet.online')
    // }

    const wsClosed = () => {
        if(device.webSocket.readyState !== device.webSocket.CLOSED && device.webSocket.readyState !== device.webSocket.CLOSING) {
            device.webSocket.onclose = function () {
            }
            device.webSocket.close()
        }
    }

    const wsClosed2 = () => {
        wsClosed()
        history.push(ADMIN_ROUTE)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} onClick={wsClosed} to={SHOP_ROUTE}>Championship</NavLink>
                {/*<a href='../'>Championship</a>*/}
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        {user.checkUser.role === "ADMIN" ?
                            <Nav className="ml-auto" style={{color: 'white'}}>
                                <Button
                                    variant={"outline-light"}
                                    onClick={() => history.push(ADMIN_SETTINGS)}
                                >
                                    Championship
                                </Button>
                            </Nav>
                            :
                            <Nav></Nav>
                        }
                        {/*<Button*/}
                        {/*    variant={"outline-light"}*/}
                        {/*    onClick={() => history.push(QIWI_ROUTE)}*/}
                        {/*    className="ml-2"*/}
                        {/*>DONATE*/}
                        {/*</Button>*/}

                        <Button
                            variant={"outline-light"}
                            onClick={() => setDeviceVisible(true)}
                            className="ml-2"
                        >
                            DONATE
                        </Button>
                        <CreateQiwi show={deviceVisible} onHide={() => setDeviceVisible(false)} nametype={"cyberbet"}/>

                        <Button
                            variant={"outline-light"}
                            onClick={() => {wsClosed2()}}
                            className="ml-2"
                        >
                            {userdata.userData.username}: {userdata.userData.user_fund} руб.
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );

})

export default NavBar;
