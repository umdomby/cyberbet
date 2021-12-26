import React, {useContext, useEffect, useState} from 'react';
import {Card, Col, Container, Row, Spinner} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import DeviceItem from "./DeviceItem";
import {check} from "../http/userAPI";
import {checkUserData} from "../http/userDataAPI";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import {fetchUsersWin} from "../http/vsAPI";
import ListGroup from "react-bootstrap/ListGroup";
import {fetchQiwiPayUsers} from "../http/qiwiAPI";


const DeviceListStartWin = observer((props) => {
    const {device} = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [win, setWin] = useState({})

    useEffect(() => {
         if(device.baseCreatedWin === true && props.load === true) {
            fetchUsersWin(device.selectedType.id).then(data => {
                device.setWin(data.users_win)
                const a = 0
            }).finally(() => setLoading(false))
         }
        const a = 0
    }, [device.selectedType])
    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <Container style={{maxWidth: '100%'}}>
            {device.baseCreatedWin === true && props.load === true ?
                <ListGroup>
                    <div className="m-2 list-unstyled d-flex h-100 justify-content-center align-self-center"
                         style={{fontSize: 30, color: '#9a1818'}}>VICTORY USERS
                    </div>
                    <Row>
                        <Col className="d-flex justify-content-center" style={{maxWidth: '10%'}}>

                        </Col>
                        <Col className="d-flex justify-content-center" style={{maxWidth: '40%'}}>
                            <div style={{fontSize: 25}}>users</div>
                        </Col>
                        <Col className="d-flex justify-content-center" style={{maxWidth: '25%'}}>
                            <div style={{fontSize: 25}}>карта</div>
                        </Col>
                        <Col className="d-flex justify-content-center" style={{maxWidth: '25%'}}>
                            <div style={{fontSize: 25}}>этап</div>
                        </Col>
                    </Row>
                    {
                        device.baseCreatedWin && props.load === true ? device.win.rows.map((users_win, index) =>
                        <ListGroup.Item key={index}
                            //style={{cursor: 'pointer'}}
                            // active={type.id === device.selectedType.id}
                            // onClick={() =>
                            //     brandIf(type, type.id)
                            // }
                        >

                            <Row>
                                <Col className="d-flex justify-content-center" style={{maxWidth: '10%'}}>
                                    <Image style={{border: '5px solid lightgray'}} width={40} height={40}
                                           src={process.env.REACT_APP_API_URL + "cup.png"}/>
                                </Col>

                                <Col className="d-flex justify-content-center" style={{maxWidth: '40%'}}>
                                    <div style={{fontSize: 15}}>{users_win.user}</div>
                                </Col>

                                <Col className="d-flex justify-content-center" style={{maxWidth: '25%'}}>
                                    <div style={{fontSize: 15}}>{users_win.brandsName}</div>
                                </Col>
                                <Col className="d-flex justify-content-center" style={{maxWidth: '25%'}}>
                                    <div style={{fontSize: 15}}>{users_win.lap}</div>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        )
                        :
                        ""
                    }
                </ListGroup>
                :
                ""
            }
        </Container>

    );
});

export default DeviceListStartWin;
