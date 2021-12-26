import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Col, Pagination, Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import ListGroup from "react-bootstrap/ListGroup";
import moment from "moment";
import ReactPaginate from "react-paginate";
// import './../App.css'

const DevicePage_userWinChamp = observer(() => {

    const {userdata} = useContext(Context)

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 5;
    const pagesVisited = pageNumber * usersPerPage;

    const pageCount = Math.ceil(userdata.userWinOpp.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div>
            <ListGroup className="mb-3">
                <div className="m-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Statistics of wins and losses</div>
                <Row style={{ minWidth: '800px'}}>
                    <Col style={{ minWidth: '150px'}}>
                        <div style={{ fontSize: 15, color: '#313131'}} >Дата</div>
                    </Col>
                    <Col style={{ minWidth: '150px'}}>
                        <div style={{ fontSize: 15, color: '#313131'}} >Чемпионат</div>
                    </Col>
                    <Col style={{ minWidth: '150px'}}>
                        <div style={{ fontSize: 15, color: '#313131'}} >Карта</div>
                    </Col>
                    <Col style={{minWidth: '50px'}}>
                        <div style={{ fontSize: 15, color: '#313131'}} >Этап</div>
                    </Col>
                    <Col style={{minWidth: '150px'}}>
                        <div style={{ fontSize: 15, color: '#313131'}} >name</div>
                    </Col>
                    <Col style={{minWidth: '150px'}}>
                        <div style={{ fontSize: 15, color: '#313131'}} >name</div>
                    </Col>
                </Row>
                {userdata.userWinOpp
                    .slice(pagesVisited, pagesVisited + usersPerPage)
                    .map((userWinOpp, index) =>
                        <div key={index}>
                            {userWinOpp.rows.map((userWinOpp, index) =>
                                // <ListGroup.Item key={index}>
                                    <Row key={index} style={{ minWidth: '800px', border: 1}}>
                                        <Col style={{ minWidth: '150px'}}>
                                            <div style={{ fontSize: 12}} >{moment(userWinOpp.dateGame).format('YYYY-MM-DD HH:MM')}</div>
                                        </Col>
                                        <Col style={{minWidth: '150px'}}>
                                            <div style={{ fontSize: 12}} >{userWinOpp.champ}</div>
                                        </Col>
                                        <Col style={{minWidth: '150px'}}>
                                            <div style={{fontSize: 15}} >{userWinOpp.brandName}</div>
                                        </Col>
                                        <Col style={{minWidth: '50px'}}>
                                            <div style={{ fontSize: 12}} >{userWinOpp.lap}</div>
                                        </Col>
                                        <Col style={{ minWidth: '150px'}}>
                                            <div style={{ fontSize: 12, color: userWinOpp.userCheck ? 'red' : 'green'}} >{userWinOpp.username}</div>

                                        </Col>
                                        <Col style={{ minWidth: '150px'}}>
                                            <div style={{ fontSize: 12, color: userWinOpp.oppCheck ? 'red' : 'green'}} >{userWinOpp.oppUsername}</div>
                                        </Col>
                                    </Row>
                                // </ListGroup.Item>
                            )}
                        </div>
                    )}
            </ListGroup>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    );
});

export default DevicePage_userWinChamp;
