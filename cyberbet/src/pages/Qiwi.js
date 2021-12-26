import {observer} from "mobx-react-lite";
import React, {useEffect, useState} from "react";
import {fetchQiwi, fetchQiwiPayUsers} from "../http/qiwiAPI";
import {fetchBrands} from "../http/deviceAPI";
import {Button, Col, Dropdown, Row, Spinner} from "react-bootstrap";
import {Container} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import DeviceItem from "../components/DeviceItem";
import {DEVICE_ROUTE} from "../utils/consts";
import moment from "moment";
import ReactPaginate from "react-paginate";
// import "./../App.css"

const Qiwi = observer(() => {
    const [qiwiPayUsers, setQiwiPayUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [state, setState] = React.useState({ num: 0 });

    const pageL  = 10

    const [pageNumber01, setPageNumber01] = useState(0);
    const usersPerPage01 = pageL;
    const pagesVisited01 = pageNumber01 * usersPerPage01;

    const [pageNumber02, setPageNumber02] = useState(0);
    const usersPerPage02 = pageL;
    const pagesVisited02 = pageNumber02 * usersPerPage02;

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = pageL;
    const pagesVisited = pageNumber * usersPerPage;

    const [pageNumber2, setPageNumber2] = useState(0);
    const usersPerPage2 = pageL;
    const pagesVisited2 = pageNumber2 * usersPerPage2;

    const [pageNumber3, setPageNumber3] = useState(0);
    const usersPerPage3 = pageL;
    const pagesVisited3 = pageNumber3 * usersPerPage3;

    const [pageNumber4, setPageNumber4] = useState(0);
    const usersPerPage4 = pageL;
    const pagesVisited4 = pageNumber4 * usersPerPage4;

    const [pageNumber5, setPageNumber5] = useState(0);
    const usersPerPage5 = pageL;
    const pagesVisited5 = pageNumber5 * usersPerPage5;

    const [pageNumber6, setPageNumber6] = useState(0);
    const usersPerPage6 = pageL;
    const pagesVisited6 = pageNumber6 * usersPerPage6;

    const [pageNumber7, setPageNumber7] = useState(0);
    const usersPerPage7 = pageL;
    const pagesVisited7 = pageNumber7 * usersPerPage7;

    const [pageNumber8, setPageNumber8] = useState(0);
    const usersPerPage8 = pageL;
    const pagesVisited8 = pageNumber8 * usersPerPage8;

    const [pageNumber9, setPageNumber9] = useState(0);
    const usersPerPage9 = pageL;
    const pagesVisited9 = pageNumber9 * usersPerPage9;

    const [pageNumber10, setPageNumber10] = useState(0);
    const usersPerPage10 = pageL;
    const pagesVisited10 = pageNumber10 * usersPerPage10;

    useEffect(() => {
        fetchQiwiPayUsers().then(data => setQiwiPayUsers(data)).finally(() => setLoading(false));
        // const timer = setTimeout(() => setState({ num: state.num + 1 }), 3000);
        // return () => clearTimeout(timer);
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    const pageCountChamp = Math.ceil(qiwiPayUsers.donates_champ.rows.length / usersPerPage01);
    const changePageChamp = ({ selected }) => {
        setPageNumber01(selected);
    };
    const pageCountChampBest = Math.ceil(qiwiPayUsers.donates_champ_best.rows.length / usersPerPage02);
    const changePageChampBest = ({ selected }) => {
        setPageNumber02(selected);
    };

    const pageCount = Math.ceil(qiwiPayUsers.donates_cyberbet.rows.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    const pageCountUserBest = Math.ceil(qiwiPayUsers.donates_cyberbet_best.rows.length / usersPerPage2);
    const changePageUserBest = ({ selected }) => {
        setPageNumber2(selected);
    };
    const pageCountTypesBest = Math.ceil(qiwiPayUsers.donates_types.rows.length / usersPerPage3);
    const changePageTypesBest = ({ selected }) => {
        setPageNumber3(selected);
    };
    const pageCount4 = Math.ceil(qiwiPayUsers.donates_to_users.rows.length / usersPerPage4);
    const changePage4 = ({ selected }) => {
        setPageNumber4(selected);
    };
    const pageCount6 = Math.ceil(qiwiPayUsers.donates_to_users_best.rows.length / usersPerPage6);
    const changePage6 = ({ selected }) => {
        setPageNumber6(selected);
    };
    const pageCountReg = Math.ceil(qiwiPayUsers.donates_brands.rows.length / usersPerPage5);
    const changePageReg = ({ selected }) => {
        setPageNumber5(selected);
    };
    const pageCount7 = Math.ceil(qiwiPayUsers.pay_to_game.rows.length / usersPerPage7);
    const changePage7 = ({ selected }) => {
        setPageNumber7(selected);
    };
    const pageCount8 = Math.ceil(qiwiPayUsers.pay_to_game_best.rows.length / usersPerPage8);
    const changePage8 = ({ selected }) => {
        setPageNumber8(selected);
    };
    const pageCount9 = Math.ceil(qiwiPayUsers.fund_to_game.rows.length / usersPerPage9);
    const changePage9 = ({ selected }) => {
        setPageNumber9(selected);
    };
    const pageCount10 = Math.ceil(qiwiPayUsers.fund_to_game_best.rows.length / usersPerPage10);
    const changePage10 = ({ selected }) => {
        setPageNumber10(selected);
    };


    return (
        <Container style={{maxWidth: '100%'}}>

            {/*1*/}
            <Row className="mb-2">
                <Col style={{maxWidth: '75%', minWidth: '900px'}}>
                    <ListGroup className="mb-3">
                        <div className="m-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Donates to championship users</div>
                        {qiwiPayUsers.donates_champ.rows
                            .slice(pagesVisited01, pagesVisited01 + usersPerPage01)
                            .map((qiwiPayUser, index) =>
                                <ListGroup.Item key={index}
                                    //style={{cursor: 'pointer'}}
                                    // active={type.id === device.selectedType.id}
                                    // onClick={() =>
                                    //     brandIf(type, type.id)
                                    // }
                                >
                                    <Row>
                                        <Col className="ml_2" style={{maxWidth: '20%', minWidth: '150px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.username}</div>
                                        </Col>

                                        <Col style={{minWidth: '50px',maxWidth: '10%'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.amount} руб.</div>
                                        </Col>
                                        <Col style={{maxWidth: '15%', minWidth: '150px'}}>
                                            <div style={{ fontSize: 12}} >{moment(qiwiPayUser.createdAt).format('YYYY-MM-DD HH:mm')}</div>
                                        </Col>
                                        <Col style={{maxWidth: '25%', minWidth: '100px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.comment}</div>
                                        </Col>
                                        {/*<Col className="d-flex justify-content-left" style={{maxWidth: '10%'}}>*/}
                                        {/*    <div style={{ fontSize: 15}} >{qiwiPayUser.brandName}</div>*/}
                                        {/*</Col>*/}
                                        <Col style={{maxWidth: '20%', minWidth: '100px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.nametype}</div>
                                        </Col>
                                        <Col className="d-flex justify-content-left" style={{maxWidth: '8%'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.brandName}</div>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                    </ListGroup>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCountChamp}
                        onPageChange={changePageChamp}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </Col>
                <Col style={{maxWidth: '25%', minWidth: '400px'}}>
                    <div>
                        <ListGroup className="mb-3">
                            <div className="m-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Best donates championship users</div>
                            {qiwiPayUsers.donates_champ_best.rows
                                .slice(pagesVisited02, pagesVisited02 + usersPerPage02)
                                .map((qiwiPayUser, index) =>
                                    <ListGroup.Item key={index}
                                        //style={{cursor: 'pointer'}}
                                        // active={type.id === device.selectedType.id}
                                        // onClick={() =>
                                        //     brandIf(type, type.id)
                                        // }
                                    >
                                        <Row>
                                            <Col className="d-flex justify-content-center" style={{maxWidth: '65%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.username}</div>
                                            </Col>

                                            <Col className="d-flex justify-content-center" style={{maxWidth: '35%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.sum} руб.</div>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                        </ListGroup>
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCountChampBest}
                            onPageChange={changePageChampBest}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </Col>
            </Row>

            {/*2*/}
            <Row>
                <Col style={{maxWidth: '75%', minWidth: '900px'}}>
                    <div>
                        <ListGroup className="mb-3">
                            <div className="m-2 d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Donates to championship map</div>
                            {qiwiPayUsers.donates_brands.rows
                                .slice(pagesVisited5, pagesVisited5 + usersPerPage5)
                                .map((qiwiPayUser, index) =>
                                    <ListGroup.Item key={index}
                                        //style={{cursor: 'pointer'}}
                                        // active={type.id === device.selectedType.id}
                                        // onClick={() =>
                                        //     brandIf(type, type.id)
                                        // }
                                    >
                                        <Row>
                                            <Col style={{marginLeft: '2%', maxWidth: '43%', minWidth: '120px'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.nametype}</div>
                                            </Col>
                                            <Col style={{maxWidth: '23%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.name}</div>
                                            </Col>
                                            <Col style={{maxWidth: '23%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.amount + qiwiPayUser.brand_payment} руб.</div>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                        </ListGroup>
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCountReg}
                            onPageChange={changePageReg}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </Col>
                <Col style={{maxWidth: '25%', minWidth: '400px'}}>
                    <div>
                        <ListGroup className="mb-3">
                            <div className="m-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Best donates championship</div>
                            {qiwiPayUsers.donates_types.rows
                                .slice(pagesVisited3, pagesVisited3 + usersPerPage3)
                                .map((qiwiPayUser, index) =>
                                    <ListGroup.Item key={index}
                                        //style={{cursor: 'pointer'}}
                                        // active={type.id === device.selectedType.id}
                                        // onClick={() =>
                                        //     brandIf(type, type.id)
                                        // }
                                    >
                                        <Row>
                                            <Col className="d-flex justify-content-center" style={{maxWidth: '40%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.description}</div>
                                            </Col>
                                            <Col className="d-flex justify-content-center" style={{maxWidth: '40%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.nametype}</div>
                                            </Col>
                                            <Col className="d-flex justify-content-center" style={{maxWidth: '20%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.fund} руб.</div>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                        </ListGroup>
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCountTypesBest}
                            onPageChange={changePageTypesBest}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </Col>
            </Row>

            {/*3*/}
            <Row className="mb-5">
                <Col style={{maxWidth: '75%', minWidth: '900px'}}>
                    <ListGroup className="mb-3">
                        <div className="m-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Donates to users</div>
                        {qiwiPayUsers.donates_to_users.rows
                            .slice(pagesVisited4, pagesVisited4 + usersPerPage4)
                            .map((qiwiPayUser, index) =>
                                <ListGroup.Item key={index}
                                    //style={{cursor: 'pointer'}}
                                    // active={type.id === device.selectedType.id}
                                    // onClick={() =>
                                    //     brandIf(type, type.id)
                                    // }
                                >
                                    <Row>
                                        <Col className="ml_2" style={{maxWidth: '25%', minWidth: '150px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.username}</div>
                                        </Col>

                                        <Col style={{minWidth: '50px',maxWidth: '10%'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.amount} руб.</div>
                                        </Col>
                                        <Col style={{maxWidth: '15%', minWidth: '150px'}}>
                                            <div style={{ fontSize: 12}} >{moment(qiwiPayUser.createdAt).format('YYYY-MM-DD HH:mm')}</div>
                                        </Col>
                                        <Col style={{maxWidth: '20%', minWidth: '100px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.comment}</div>
                                        </Col>
                                        {/*<Col className="d-flex justify-content-left" style={{maxWidth: '10%'}}>*/}
                                        {/*    <div style={{ fontSize: 15}} >{qiwiPayUser.brandName}</div>*/}
                                        {/*</Col>*/}
                                        <Col style={{maxWidth: '20%', minWidth: '100px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.nametype}</div>
                                        </Col>
                                        {/*<Col className="d-flex justify-content-left" style={{maxWidth: '8%'}}>*/}
                                        {/*    <div style={{ fontSize: 12}} >{qiwiPayUser.brandName}</div>*/}
                                        {/*</Col>*/}
                                    </Row>
                                </ListGroup.Item>
                            )}
                    </ListGroup>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount4}
                        onPageChange={changePage4}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </Col>
                <Col style={{maxWidth: '25%', minWidth: '400px'}}>
                    <div>
                        <ListGroup className="mb-3">
                            <div className="m-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Best donates to users</div>
                            {qiwiPayUsers.donates_to_users_best.rows
                                .slice(pagesVisited6, pagesVisited6 + usersPerPage6)
                                .map((qiwiPayUser, index) =>
                                    <ListGroup.Item key={index}
                                        //style={{cursor: 'pointer'}}
                                        // active={type.id === device.selectedType.id}
                                        // onClick={() =>
                                        //     brandIf(type, type.id)
                                        // }
                                    >
                                        <Row>
                                            <Col className="d-flex justify-content-center" style={{maxWidth: '65%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.username}</div>
                                            </Col>

                                            <Col className="d-flex justify-content-center" style={{maxWidth: '35%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.sum} руб.</div>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                        </ListGroup>
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount6}
                            onPageChange={changePage6}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </Col>
            </Row>


            {/*4*/}
            <Row className="mb-5">
                <Col style={{maxWidth: '75%', minWidth: '900px'}}>
                    <ListGroup className="mb-3">
                        <div className="m-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Donates to cyberbet</div>
                        {qiwiPayUsers.donates_cyberbet.rows
                            .slice(pagesVisited, pagesVisited + usersPerPage)
                            .map((qiwiPayUser, index) =>
                                <ListGroup.Item key={index}
                                    //style={{cursor: 'pointer'}}
                                    // active={type.id === device.selectedType.id}
                                    // onClick={() =>
                                    //     brandIf(type, type.id)
                                    // }
                                >
                                    <Row>
                                        <Col className="ml_2" style={{maxWidth: '25%', minWidth: '150px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.username}</div>
                                        </Col>

                                        <Col style={{minWidth: '50px',maxWidth: '10%'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.amount} руб.</div>
                                        </Col>
                                        <Col style={{maxWidth: '15%', minWidth: '150px'}}>
                                            <div style={{ fontSize: 12}} >{moment(qiwiPayUser.createdAt).format('YYYY-MM-DD HH:mm')}</div>
                                        </Col>
                                        <Col style={{maxWidth: '20%', minWidth: '100px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.comment}</div>
                                        </Col>
                                        {/*<Col style={{maxWidth: '10%'}}>*/}
                                        {/*    <div style={{ fontSize: 15}} >{qiwiPayUser.brandName}</div>*/}
                                        {/*</Col>*/}
                                        <Col  style={{maxWidth: '20%', minWidth: '100px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.nametype}</div>
                                        </Col>
                                        {/*<Col style={{maxWidth: '8%'}}>*/}
                                        {/*    <div style={{ fontSize: 12}} >{qiwiPayUser.brandName}</div>*/}
                                        {/*</Col>*/}
                                    </Row>
                                </ListGroup.Item>
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
                </Col>
                <Col style={{maxWidth: '25%', minWidth: '400px'}}>
                    <div>
                        <ListGroup className="mb-3">
                            <div className="m-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Best donates to cyberbet</div>
                            {qiwiPayUsers.donates_cyberbet_best.rows
                                .slice(pagesVisited2, pagesVisited2 + usersPerPage2)
                                .map((qiwiPayUser, index) =>
                                    <ListGroup.Item key={index}
                                        //style={{cursor: 'pointer'}}
                                        // active={type.id === device.selectedType.id}
                                        // onClick={() =>
                                        //     brandIf(type, type.id)
                                        // }
                                    >
                                        <Row>
                                            <Col className="d-flex justify-content-center" style={{maxWidth: '65%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.username}</div>
                                            </Col>

                                            <Col className="d-flex justify-content-center" style={{maxWidth: '35%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.sum} руб.</div>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                        </ListGroup>
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCountUserBest}
                            onPageChange={changePageUserBest}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </Col>
            </Row>

            {/*5*/}
            <Row className="mb-5">
                <Col style={{maxWidth: '75%', minWidth: '900px'}}>
                    <ListGroup className="mb-3">
                        <div className="m-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Payment to game</div>
                        {qiwiPayUsers.pay_to_game.rows
                            .slice(pagesVisited7, pagesVisited7 + usersPerPage7)
                            .map((qiwiPayUser, index) =>
                                <ListGroup.Item key={index}
                                    //style={{cursor: 'pointer'}}
                                    // active={type.id === device.selectedType.id}
                                    // onClick={() =>
                                    //     brandIf(type, type.id)
                                    // }
                                >
                                    <Row>
                                        <Col className="ml_2" style={{maxWidth: '15%', minWidth: '100px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.username}</div>
                                        </Col>
                                        <Col style={{ maxWidth: '23%', minWidth: '120px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.nametype}</div>
                                        </Col>
                                        {/*<Col style={{maxWidth: '23%', minWidth: '120px'}}>*/}
                                        {/*    <div style={{ fontSize: 12}} >{qiwiPayUser.name}</div>*/}
                                        {/*</Col>*/}
                                        <Col style={{maxWidth: '5%', minWidth: '120px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.amount} руб.</div>
                                        </Col>
                                        <Col style={{maxWidth: '10%', minWidth: '100px'}}>
                                            <div style={{ fontSize: 12}} >{moment(qiwiPayUser.createdAt).format('YYYY-MM-DD HH:mm')}</div>
                                        </Col>
                                        <Col style={{maxWidth: '20%', minWidth: '100px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.comment}</div>
                                        </Col>
                                        {/*<Col className="d-flex justify-content-left" style={{maxWidth: '10%'}}>*/}
                                        {/*    <div style={{ fontSize: 15}} >{qiwiPayUser.brandName}</div>*/}
                                        {/*</Col>*/}
                                        {/*<Col className="d-flex justify-content-left" style={{maxWidth: '8%'}}>*/}
                                        {/*    <div style={{ fontSize: 12}} >{qiwiPayUser.brandName}</div>*/}
                                        {/*</Col>*/}
                                    </Row>
                                </ListGroup.Item>
                            )}
                    </ListGroup>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount7}
                        onPageChange={changePage7}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </Col>
                <Col style={{maxWidth: '25%', minWidth: '400px'}}>
                    <div>
                        <ListGroup className="mb-3">
                            <div className="m-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Best payment to game</div>
                            {qiwiPayUsers.pay_to_game_best.rows
                                .slice(pagesVisited8, pagesVisited8 + usersPerPage8)
                                .map((qiwiPayUser, index) =>
                                    <ListGroup.Item key={index}
                                        //style={{cursor: 'pointer'}}
                                        // active={type.id === device.selectedType.id}
                                        // onClick={() =>
                                        //     brandIf(type, type.id)
                                        // }
                                    >
                                        <Row>
                                            <Col className="d-flex justify-content-center" style={{maxWidth: '65%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.username}</div>
                                            </Col>

                                            <Col className="d-flex justify-content-center" style={{maxWidth: '35%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.sum} руб.</div>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                        </ListGroup>
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount8}
                            onPageChange={changePage8}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </Col>
            </Row>

            {/*6*/}
            <Row className="mb-5">
                <Col style={{maxWidth: '75%', minWidth: '900px'}}>
                    <ListGroup className="mb-3">
                        <div className="m-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Fund to game</div>
                        {qiwiPayUsers.fund_to_game.rows
                            .slice(pagesVisited9, pagesVisited9 + usersPerPage9)
                            .map((qiwiPayUser, index) =>
                                <ListGroup.Item key={index}
                                    //style={{cursor: 'pointer'}}
                                    // active={type.id === device.selectedType.id}
                                    // onClick={() =>
                                    //     brandIf(type, type.id)
                                    // }
                                >
                                    <Row>
                                        <Col className="ml_2" style={{maxWidth: '15%', minWidth: '100px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.username}</div>
                                        </Col>
                                        <Col style={{ maxWidth: '23%', minWidth: '120px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.nametype}</div>
                                        </Col>
                                        {/*<Col style={{maxWidth: '23%', minWidth: '120px'}}>*/}
                                        {/*    <div style={{ fontSize: 12}} >{qiwiPayUser.name}</div>*/}
                                        {/*</Col>*/}
                                        <Col style={{maxWidth: '5%', minWidth: '120px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.amount} руб.</div>
                                        </Col>
                                        <Col style={{maxWidth: '10%', minWidth: '100px'}}>
                                            <div style={{ fontSize: 12}} >{moment(qiwiPayUser.createdAt).format('YYYY-MM-DD HH:mm')}</div>
                                        </Col>
                                        <Col style={{maxWidth: '20%', minWidth: '100px'}}>
                                            <div style={{ fontSize: 12}} >{qiwiPayUser.comment}</div>
                                        </Col>
                                        {/*<Col className="d-flex justify-content-left" style={{maxWidth: '10%'}}>*/}
                                        {/*    <div style={{ fontSize: 15}} >{qiwiPayUser.brandName}</div>*/}
                                        {/*</Col>*/}
                                        {/*<Col className="d-flex justify-content-left" style={{maxWidth: '8%'}}>*/}
                                        {/*    <div style={{ fontSize: 12}} >{qiwiPayUser.brandName}</div>*/}
                                        {/*</Col>*/}
                                    </Row>
                                </ListGroup.Item>
                            )}
                    </ListGroup>
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount9}
                        onPageChange={changePage9}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </Col>
                <Col style={{maxWidth: '25%', minWidth: '400px'}}>
                    <div>
                        <ListGroup className="mb-3">
                            <div className="m-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Best fund to game</div>
                            {qiwiPayUsers.fund_to_game_best.rows
                                .slice(pagesVisited10, pagesVisited10 + usersPerPage10)
                                .map((qiwiPayUser, index) =>
                                    <ListGroup.Item key={index}
                                        //style={{cursor: 'pointer'}}
                                        // active={type.id === device.selectedType.id}
                                        // onClick={() =>
                                        //     brandIf(type, type.id)
                                        // }
                                    >
                                        <Row>
                                            <Col className="d-flex justify-content-center" style={{maxWidth: '65%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.username}</div>
                                            </Col>

                                            <Col className="d-flex justify-content-center" style={{maxWidth: '35%'}}>
                                                <div style={{ fontSize: 12}} >{qiwiPayUser.sum} руб.</div>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}
                        </ListGroup>
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount10}
                            onPageChange={changePage10}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </Col>
            </Row>

        </Container>
    );

})
export default Qiwi;
