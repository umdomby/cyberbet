import React, {useContext, useState} from 'react';
import {Button, Container} from "react-bootstrap";
//import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import {Context} from "../index";
import {DEVICE_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
//import CreateType from "../components/modals/CreateType";


const Admin = () => {
    const {userdata, user} = useContext(Context)
    const history = useHistory()
    const [deviceVisible, setDeviceVisible] = useState(false)


    return (
        <Container className="d-flex flex-column">

            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => history.push(DEVICE_ROUTE + '/' + userdata.userData.id)}
            >
                {userdata.userData.username}
            </Button>

            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Registration Heroes Hota
            </Button>

            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>

        </Container>
    );
};

export default Admin;
