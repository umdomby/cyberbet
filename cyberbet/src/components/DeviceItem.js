import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE, QIWI_ROUTE} from "../utils/consts";
import Row from "react-bootstrap/Row";
import CreateQiwiPayment from "./modals/CreateQiwiPayment";
import CreateQiwi from "./modals/CreateQiwi";
// import './../App.css'
import CreateFundGame from "./modals/CreateFundGame";
import {Context} from "../index";
import {fetchDevices} from "../http/deviceAPI";

const DeviceItem = ({device}) => {

    const {user} = useContext(Context)
    const history = useHistory()
    const [qiwiVisible, setQiwiVisible] = useState(false)
    const [qiwiVisible2, setQiwiVisible2] = useState(false)
    const [qiwiVisible3, setQiwiVisible3] = useState(false)




    return (
        <Row>
            <Col md={5} className={"m-1"} style={{minWidth: '300px'}}>
                <Card style={{backgroundColor: device.dev_start ? '#b2ff68' : '#e8e8e8'}}>
                    <div className="d-flex flex-column align-items-center" >
                        <div className="mr-2" style={{color: device.dev_start ? 'green' : 'red'}}
                             onClick={() => history.push(DEVICE_ROUTE + '/' + device.userdatumId)} style={{cursor: 'pointer'}} border={"light"}>{device.username}
                        </div>
                        {/*<Image width={18} height={18} src={star}/>{device.rating}*/}
                        <div className="mr-2">{device.nametype}</div>
                        <div>{device.name}</div>
                        <div className="ml-2">взнос на игру: {device.dev_amount}руб.</div>
                        <div className="ml-2">фонд игрока: {device.user_fund}руб.</div>
                        <Button
                            // className="myButton"
                            disabled={device.dev_amount > device.user_fund || user.checkUser.id !== device.userId || device.dev_start}
                            style={{backgroundColor: device.dev_amount <= device.user_fund ? '#b6afff' : '#cd9e9e',
                                    maxWidth: '200px', minWidth: '200px'}}
                            onClick={() => setQiwiVisible3(true)}
                        >
                            fund to game: -{device.dev_amount}руб.
                        </Button>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <Button
                            disabled={device.dev_start}
                            style={{fontSize:'12px',maxWidth: '200px', minWidth: '200px'}}
                            variant={"warning"}
                            onClick={() => setQiwiVisible(true)}
                            className="m-1"
                        >
                            GAME
                        </Button>
                        <CreateQiwiPayment show={qiwiVisible} onHide={() => setQiwiVisible(false)}
                                           billid={device.dev_billid}
                                           pay={device.dev_amount}
                                           nametype={device.username}
                                           typeName={device.nametype}
                                           brandName={device.name}
                                           typeid={device.typeId}
                                           brandid={device.brandId}
                                           code_transaction={4}
                        />

                        <Button
                            style={{fontSize:'12px', maxWidth: '200px', minWidth: '200px'}}
                            variant={"warning"}
                            onClick={() => setQiwiVisible2(true)}
                            className="m-1"
                        >
                            DONATE {device.username}
                        </Button>
                        <CreateQiwi show={qiwiVisible2} onHide={() => setQiwiVisible2(false)} nametype={device.username} code_transaction={3}/>
                        <CreateFundGame show={qiwiVisible3} onHide={() => setQiwiVisible3(false)}
                                        id={device.userId}
                                        billid={device.dev_billid}
                                        pay={device.dev_amount}
                                        nametype={device.username}
                                        typeName={device.nametype}
                                        brandName={device.name}
                                        typeid={device.typeId}
                                        brandid={device.brandId}
                                        fundProps={device.user_fund}
                                        code_transaction={5}
                        />

                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default DeviceItem;
