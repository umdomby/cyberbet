import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Col, Pagination, Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import ListGroup from "react-bootstrap/ListGroup";
import moment from "moment";

const DevicePage_userWinChamp = observer(() => {

    const {userdata} = useContext(Context)
    //const [dataProps, setDataProps] = useState([])
    // useEffect(() => {
    //     setDataProps(props.userWin)
    //     const a = 0
    // }, [])

    return (
        <div>
            <ListGroup className="mb-3">
                <div className="m-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Championship winner</div>
                <Row style={{ minWidth: '800px'}}>
                    <Col style={{ maxWidth: '25%', minWidth: '150px'}}>
                        <div style={{ fontSize: 15, color: '#313131'}} >Дата</div>
                    </Col>
                    <Col style={{ maxWidth: '25%', minWidth: '150px'}}>
                        <div style={{ fontSize: 15, color: '#313131'}} >Чемпионат</div>
                    </Col>
                    <Col style={{maxWidth: '25%', minWidth: '100px'}}>
                        <div style={{ fontSize: 15, color: '#313131'}} >Карта</div>
                    </Col>
                    <Col style={{maxWidth: '25%', minWidth: '50px'}}>
                        <div style={{ fontSize: 15, color: '#313131'}} >Круг</div>
                    </Col>
                </Row>
                {userdata.userWin
                    .map((userWin, index) =>
                        <div key={index}>
                            {userWin.rows.map((userWin, index) =>
                                // <ListGroup.Item key={index}>
                                    <Row key={index} style={{ minWidth: '800px'}}>
                                        <Col style={{maxWidth: '25%', minWidth: '150px'}}>
                                            <div style={{ fontSize: 15}} >{moment(userWin.date).format('YYYY-MM-DD HH:MM')}</div>
                                        </Col>
                                        <Col style={{maxWidth: '25%', minWidth: '150px'}}>
                                            <div style={{ fontSize: 15}} >{userWin.champ}</div>
                                        </Col>
                                        <Col style={{maxWidth: '25%', minWidth: '100px'}}>
                                            <div style={{ fontSize: 15}} >{userWin.brandsName}</div>
                                        </Col>
                                        <Col style={{maxWidth: '25%', minWidth: '50px'}}>
                                            <div style={{ fontSize: 15}} >{userWin.lap}</div>
                                        </Col>
                                    </Row>
                                // </ListGroup.Item>
                            )}
                        </div>

                    )}
            </ListGroup>
        </div>
    );
});

export default DevicePage_userWinChamp;
