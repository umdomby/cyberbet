import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import CreateQiwi from "./modals/CreateQiwi";
import {Button} from "react-bootstrap";
import {QIWI_ROUTE, QIWI_ROUTE_PAGINATION, USERS_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import CreateDevice from "./modals/CreateDevice";
import {Context} from "../index";


const LeftBar = observer(() => {
    const {user} = useContext(Context)
    const [qiwiVisible, setQiwiVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const history = useHistory()

    return (

        <div>

            <li className="mb-2 mt-2 list-unstyled d-flex h-100 justify-content-center align-self-center">
                <Button
                    variant={"warning"}
                    onClick={() => setQiwiVisible(true)}
                    className="mr-1"
                >
                    DONATE
                </Button>
                <Button
                    variant={"outline-secondary"}
                    onClick={() => history.push(QIWI_ROUTE)}
                    className="mr-1"
                >
                    DONATE LIST
                </Button>
                <Button
                    variant={"outline-secondary"}
                    onClick={() => history.push(USERS_ROUTE)}
                >
                    USERS LIST
                </Button>
            </li>
            {user.isAuth ?
            <li className="mb-2 list-unstyled d-flex h-100 justify-content-center align-self-center">
                <Button
                    variant={"outline-dark"}
                    // className="mt-1 p-2"
                    onClick={() => setDeviceVisible(true)}
                >
                    GAME REGISTRATION
                </Button>
            </li>
            :
                ""
            }

            <CreateQiwi show={qiwiVisible} onHide={() => setQiwiVisible(false)} nametype="cyberbet" code_transaction={2}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>

        </div>

    );

})

export default LeftBar
