import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {Button, Col, ListGroup, Row, Spinner} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {checkUsers} from "../http/userDataAPI";
import ReactPaginate from "react-paginate";
import moment from "moment";
import {Context} from "../index";
import {DEVICE_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import Image from "react-bootstrap/Image";


const Users = observer(() => {
    const {device} = useContext(Context)
    const history = useHistory()
    const [usersState, setUsersState] = useState([])
    const [loading, setLoading] = useState(true)

    const pageL  = 100

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = pageL;
    const pagesVisited = pageNumber * usersPerPage;

    const [sortType, setSortType] = useState('countWin');

    // useEffect(() => {
    //     checkUsers().then(data => setUsersState(data.users.rows)).finally(() => setLoading(false));
    // }, [])

    useEffect(() => {
        checkUsers().then(data => {
            const sortArray = type => {
                const sorted = [...data.users.rows].sort((a, b) => b[type] - a[type]);
                setUsersState(sorted);
            };
            sortArray(sortType);
        }).finally(() => setLoading(false));
    }, [sortType])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }


    const sortArray = (type) => {
        // const sorted = [...usersState].sort((a, b) => b[type] - a[type]);
        // setUsersState(sorted);
        setSortType(type)
    };

    const pageCount = Math.ceil(usersState.length / usersPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <Container style={{maxWidth: '100%'}}>
            <Row className="mb-2">
                <Col style={{maxWidth: '100%', minWidth: '1200px'}}>
                    <ListGroup className="mb-3">
                        <div className="mt-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 20}}>Users cyberbet update 10min</div>
                        <div className="mb-2 list-unstyled d-flex h-100 justify-content-center align-self-center" style={{fontSize: 10}}>update 10min</div>
                        <Row style={{ fontSize: 12}}>
                            <Col className="ml_2" style={{maxWidth: '10%', minWidth: '170px'}}>
                                <div className="myTooltip" data-info="А вот и подсказка!" style={{cursor: 'pointer'}} onClick={()=>{sortArray("username")}} >username</div>

                            </Col>
                            <Col style={{minWidth: '30px',maxWidth: '5%'}}>
                                <div style={{cursor: 'pointer'}} onClick={()=>{sortArray("rating")}}>rateH</div>
                            </Col>
                            <Col style={{minWidth: '30px',maxWidth: '5%'}}>
                                <div style={{cursor: 'pointer'}} onClick={()=>{sortArray("ratingcy")}}>rateCGP</div>
                            </Col>
                            <Col style={{minWidth: '30px',maxWidth: '5%'}}>
                                <div style={{cursor: 'pointer'}} onClick={()=>{sortArray("ratingcymap")}}>rateCMap</div>
                            </Col>
                            <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                <div style={{cursor: 'pointer'}} onClick={()=>{sortArray("game")}} >Game</div>
                            </Col>
                            <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                <div style={{cursor: 'pointer'}} onClick={()=>{sortArray("countWin")}}>Win</div>
                            </Col>
                            <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                <div style={{cursor: 'pointer'}} onClick={()=>{sortArray("countLoss")}} >Loss</div>
                            </Col>
                            <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                <div style={{cursor: 'pointer'}} onClick={()=>{sortArray("promoCount")}} >promo</div>
                            </Col>
                            <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                <div style={{cursor: 'pointer'}} onClick={()=>{sortArray("dTypes")}} >dChamp</div>
                            </Col>
                            <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                <div style={{cursor: 'pointer'}} onClick={()=>{sortArray("dCyberbet")}} >dCyber</div>
                            </Col>
                            <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                <div style={{cursor: 'pointer'}} onClick={()=>{sortArray("dUsers")}} >dUsers</div>
                            </Col>
                            <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                <div style={{cursor: 'pointer'}} onClick={()=>{sortArray("pGame")}} >pGame</div>
                            </Col>
                            <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                <div style={{cursor: 'pointer'}} onClick={()=>{sortArray("pFund")}} >pFund</div>
                            </Col>
                            <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                <div style={{cursor: 'pointer'}} onClick={()=>{sortArray("user_fund")}} >Bank руб.</div>
                            </Col>
                            <Col style={{maxWidth: '10%', minWidth: '40px'}}>
                                <div>created</div>
                            </Col>
                            <Col style={{maxWidth: '2%', minWidth: '10px'}}>
                                <Image className="mr-2 mt-1" width={15} height={15} src={process.env.REACT_APP_API_URL + 'icon/twitch.svg'}/>
                            </Col>
                            <Col style={{maxWidth: '2%', minWidth: '10px'}}>
                                <Image  className="mr-2 mt-1" width={15} height={15} src={process.env.REACT_APP_API_URL + 'icon/video.svg'}/>
                            </Col>
                            <Col style={{maxWidth: '2%', minWidth: '10px'}}>
                                <Image className="mr-2 mt-1" width={15} height={15} src={process.env.REACT_APP_API_URL + 'icon/instagram.svg'}/>
                            </Col>
                            <Col style={{maxWidth: '2%', minWidth: '10px'}}>
                                <Image className="mr-2 mt-1" width={15} height={15} src={process.env.REACT_APP_API_URL + 'icon/facebook.svg'}/>
                            </Col>
                            <Col style={{maxWidth: '2%', minWidth: '10px'}}>
                                <div>vk</div>
                            </Col>
                            <Col style={{maxWidth: '2%', minWidth: '10px'}}>
                                <div>ok</div>
                            </Col>
                        </Row>
                        {usersState
                            .slice(pagesVisited, pagesVisited + usersPerPage)
                            .map((users, index) =>
                                <ListGroup.Item key={index}
                                    //style={{cursor: 'pointer'}}
                                    // active={type.id === device.selectedType.id}
                                    // onClick={() =>
                                    //     brandIf(type, type.id)
                                    // }
                                >
                                    <Row style={{fontSize: 12}}>
                                        <Col className="ml_2" style={{maxWidth: '10%', minWidth: '170px'}}>
                                            {/*<div>{users.username}</div>*/}
                                            <div style={{cursor: 'pointer', lineHeight: 1}}
                                                 onClick={() => history.push(DEVICE_ROUTE + '/' + users.id)} >{users.username}</div>
                                        </Col>

                                        <Col style={{minWidth: '30px',maxWidth: '5%'}}>
                                            <div>{users.rating}</div>
                                        </Col>
                                        <Col style={{minWidth: '30px',maxWidth: '5%'}}>
                                            <div>{users.ratingcy}</div>
                                        </Col>
                                        <Col style={{minWidth: '30px',maxWidth: '5%'}}>
                                            <div>{users.ratingcymap}</div>
                                        </Col>
                                        <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                            <div>{users.game}</div>
                                        </Col>
                                        <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                            <div style={{ color: 'green'}} >{users.countWin}</div>
                                        </Col>
                                        <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                            <div style={{color: 'red'}} >{users.countLoss}</div>
                                        </Col>
                                        <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                            <div>{users.promoCount}</div>
                                        </Col>
                                        <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                            <div>{users.dTypes} руб.</div>
                                        </Col>
                                        <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                            <div>{users.dCyberbet} руб.</div>
                                        </Col>
                                        <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                            <div>{users.dUsers} руб.</div>
                                        </Col>
                                        <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                            <div>{users.pGame} руб.</div>
                                        </Col>
                                        <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                            <div>{users.pFund} руб.</div>
                                        </Col>
                                        <Col style={{maxWidth: '5%', minWidth: '30px'}}>
                                            <div>{users.user_fund} руб.</div>
                                        </Col>
                                        <Col style={{maxWidth: '10%', minWidth: '40px'}}>
                                            <div>{moment(users.createdAt).format('YYYY-MM-DD HH:mm')}</div>
                                        </Col>
                                        <Col style={{maxWidth: '2%', minWidth: '10px'}}>
                                            {users.twitch.length > 0 ? <a style={{minWidth: '50px', maxWidth: '50px' }} href={users.twitch} target="_blank" >tv</a> : ''}

                                        </Col>
                                        <Col style={{maxWidth: '2%', minWidth: '10px'}}>
                                            {users.youtube.length > 0 ? <a style={{minWidth: '50px', maxWidth: '50px' }} href={users.youtube} target="_blank" >yo</a> : ''}
                                        </Col>
                                        <Col style={{maxWidth: '2%', minWidth: '10px'}}>
                                            {users.instagram.length > 0 ? <a style={{minWidth: '50px', maxWidth: '50px' }} href={users.instagram} target="_blank" >in</a> : ''}
                                        </Col>
                                        <Col style={{maxWidth: '2%', minWidth: '10px'}}>
                                            {users.facebook.length > 0 ? <a style={{minWidth: '50px', maxWidth: '50px' }} href={users.facebook} target="_blank" >fb</a> : ''}
                                        </Col>
                                        <Col style={{maxWidth: '2%', minWidth: '10px'}}>
                                            {users.vk.length > 0 ? <a style={{minWidth: '50px', maxWidth: '50px' }} href={users.vk} target="_blank" >vk</a> : ''}
                                        </Col>
                                        <Col style={{maxWidth: '2%', minWidth: '10px'}}>
                                            {users.ok.length > 0 ? <a style={{minWidth: '50px', maxWidth: '50px' }} href={users.ok} target="_blank" >ok</a> : ''}
                                        </Col>
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
            </Row>

        </Container>
    );

})
export default Users;
