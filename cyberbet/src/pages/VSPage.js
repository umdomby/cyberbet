import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Row, Image, Form, Spinner} from "react-bootstrap";
import {Link, useHistory, useParams} from 'react-router-dom'
import {createImg, fetchVSDevice, imgPhotoGet} from "../http/deviceAPI";
import moment from 'moment'
import {Context} from "../index";
import star from "../assets/star.png";
import {DEVICE_ROUTE} from "../utils/consts";
import {createImgVsUser, postDataLinkVs} from "../http/vsAPI";

const VSPage = () => {
    const {user} = useContext(Context)
    const [userId, setUserId] = useState(0)
    const [typeId, setTypeId] = useState(0)
    const [userOpp, setUserOpp] = useState('')
    const [loading, setLoading] = useState(true)
    const {type, id} = useParams()
    const [VS, setVS] = useState({})
    const [VSid, setVSid] = useState(0)
    const [linkVs, setLinkVs] = useState('')
    const [img, setImg] = useState('')
    const history = useHistory()
    const [file, setFile] = useState(null)

    useEffect(() => {
        fetchVSDevice(type, id).then(data => {
            setVS(data)
           // setTimeout(() => {
           //     setImg('')
           // },1000);
        }).finally(() => setLoading(false))
    }, [img])
    if (loading) {return <Spinner animation={"grow"}/>}

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const renderer = (a) => {
        if (user.checkUser.id === a) {
            return false
        }
        else {
            return true
        }
    }

    const linkF = (a) => {
        if(a !== '' && a !== null) {
            if (a.slice(0, 7) === 'http://' || a.slice(0, 8) === 'https://') {
                return true
            } else {
                return false
            }
        }else{
            return false
        }
    }

    const addImage = () => {
        const formData = new FormData()
        formData.append('id', userId)
        formData.append('idvs', VSid)
        formData.append('typeId', typeId)
        formData.append('userOpp', userOpp)
        formData.append('img', file)
        createImgVsUser(formData).then(data => setImg(data))
        //setImg(createImgVsUser(formData))
        setFile('')
    }

    const dataLinkVs = async () => {
        try{ await postDataLinkVs(userId, VSid, typeId, userOpp, linkVs)
             alert("ссылка изменена на: " + linkVs)}
        catch (e) {alert(e.response.data.message)}}

    return (
        <Container className="mt-3">
            <Row>
                <Col className="d-flex justify-content-center" style={{maxWidth: '50%'}}>
                    <div className="text-primary" style={{cursor: 'pointer', fontSize: 30, color: '#000000'}}  onClick={() => history.push(DEVICE_ROUTE + '/' + VS.VS.rows[0].userdatumId)} >{VS.VS.rows[0].username}</div>
                </Col>

                <Col className="d-flex justify-content-center" style={{maxWidth: '50%'}}>
                    <div className="text-primary" style={{cursor: 'pointer', fontSize: 30, color: '#000000'}}  onClick={() => history.push(DEVICE_ROUTE + '/' + VS.VS.rows[0].userdatumIdOpp)} >{VS.VS.rows[0].oppUsername}</div>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col style={{maxWidth: '50%'}}>
                    <div className="d-flex flex-column align-items-center">
                        {linkF(VS.VS.rows[0].linku) ? <a href={VS.VS.rows[0].linku} target="_blank">видео</a> : <div>видео нет</div>}

                        <input type="text" className="mb-5"
                               style={{backgroundColor: 'transparent', textAlign: 'left', borderWidth: 1, width: 350,fontSize: 24}}
                               hidden={renderer(VS.VS.rows[0].userId)}
                               defaultValue={VS.VS.rows[0].linku}
                               onClick={() => {
                                   setUserId(user.checkUser.id)
                                   setVSid(VS.VS.rows[0].id)
                                   setTypeId(VS.VS.rows[0].typeId)
                                   setUserOpp('linku')
                               }}
                               onInput={() => {
                                   setUserId(user.checkUser.id)
                                   setVSid(VS.VS.rows[0].id)
                                   setTypeId(VS.VS.rows[0].typeId)
                                   setUserOpp('linku')
                               }}
                               onChange={(event) => setLinkVs(event.target.value)}
                               onKeyPress={event => {
                                   if (event.key === "Enter") {
                                       return dataLinkVs()
                                   }
                               }}
                        />
                    </div>
                </Col>

                <Col style={{maxWidth: '50%'}}>
                    <div className="d-flex flex-column align-items-center">
                        {linkF(VS.VS.rows[0].linko) ? <a href={VS.VS.rows[0].linko} target="_blank">видео</a> : <div>видео нет</div>}
                        <input type="text" className="mb-5"
                               style={{backgroundColor: 'transparent', textAlign: 'left', borderWidth: 1, width: 350,fontSize: 24}}
                               hidden={renderer(VS.VS.rows[0].oppUserId)}
                               defaultValue={VS.VS.rows[0].linko}
                               onClick={() => {
                                   setUserId(user.checkUser.id)
                                   setVSid(VS.VS.rows[0].id)
                                   setTypeId(VS.VS.rows[0].typeId)
                                   setUserOpp('linko')
                               }}
                               onInput={() => {
                                   setUserId(user.checkUser.id)
                                   setVSid(VS.VS.rows[0].id)
                                   setTypeId(VS.VS.rows[0].typeId)
                                   setUserOpp('linko')
                               }}
                               onChange={(event) => setLinkVs(event.target.value)}
                               onKeyPress={event => {
                                   if (event.key === "Enter") {
                                       return dataLinkVs()
                                   }
                               }}
                        />
                    </div>
                </Col>
            </Row>

            {/*<Row>*/}
            {/*    <Col className="d-flex justify-content-center mb-5" style={{maxWidth: '50%'}}>*/}
            {/*        <Link to={{ pathname: VS.user.rows[0].twitch }} target="_blank">Twitch</Link>*/}
            {/*    </Col>*/}
            {/*    <Col className="d-flex justify-content-center mb-5" style={{maxWidth: '50%'}}>*/}
            {/*        <Link to={{ pathname: VS.userOpp.rows[0].twitch }} target="_blank">Twitch</Link>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

            {/*<Row>*/}
            {/*    <Col className="d-flex justify-content-center" style={{maxWidth: '50%'}}>*/}
            {/*        <Image style={{ border: '5px solid lightgray'}} width={300} height={300}*/}
            {/*               src={VS.user.rows[0].img === null ? process.env.REACT_APP_API_URL + 'photo/' + 'photo.jpg' : process.env.REACT_APP_API_URL + 'photo/' + VS.user.rows[0].img}/>*/}
            {/*    </Col>*/}
            {/*    <Col className="d-flex justify-content-center" style={{maxWidth: '50%'}}>*/}
            {/*        <Image style={{ border: '5px solid lightgray'}} width={300} height={300}*/}
            {/*               src={VS.userOpp.rows[0].img === null ? process.env.REACT_APP_API_URL + 'photo/' + 'photo.jpg' : process.env.REACT_APP_API_URL + 'photo/' + VS.userOpp.rows[0].img}/>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

            {/*<Row>*/}
            {/*    <Col className="d-flex justify-content-center" style={{maxWidth: '50%'}}>*/}
            {/*        <Image width={18} height={18} src={star}/>*/}
            {/*        <div>{VS.user.rows[0].rating}</div>*/}
            {/*    </Col>*/}
            {/*    <Col className="d-flex justify-content-center" style={{maxWidth: '50%'}}>*/}
            {/*        <Image width={18} height={18} src={star}/>*/}
            {/*        <div>{VS.userOpp.rows[0].rating}</div>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

            {/*<Row>*/}
            {/*    <Col className="d-flex justify-content-center">*/}
            {/*        <div>{VS.VS.rows[0].dateMatch !== null ? moment(VS.VS.rows[0].dateMatch).format('YYYY-MM-DD HH:mm:ss') : 'Время игры еще не задано'}</div>*/}
            {/*    </Col>*/}
            {/*</Row>*/}


            {/*/!*1*!/*/}
            {/*<Row className="mt-2">*/}
            {/*    <Col style={{maxWidth: '50%'}}>*/}
            {/*        <div className="d-flex flex-column align-items-center">*/}
            {/*            ФИНАЛКА*/}
            {/*            <a href={VS.VS.rows[0].imgfu === null ? process.env.REACT_APP_API_URL + 'final.jpg' : process.env.REACT_APP_API_URL + VS.VS.rows[0].typeId +'/' + VS.VS.rows[0].imgfu} target="_blank">*/}
            {/*            <Image style={{ border: '5px solid lightgray'}} width={300} height={300}*/}
            {/*                   src={VS.VS.rows[0].imgfu === null ? process.env.REACT_APP_API_URL + 'final.jpg' : process.env.REACT_APP_API_URL + VS.VS.rows[0].typeId +'/' + VS.VS.rows[0].imgfu}/></a>*/}
            {/*            <Form.Control style={{maxWidth: '50%'}}  className="mt-1"*/}
            {/*                          hidden={renderer(VS.VS.rows[0].userId)}*/}
            {/*                          type="file"*/}
            {/*                          onChange={selectFile}*/}
            {/*            />*/}
            {/*            <Button variant="outline-secondary" size="sm" className="mt-1 mb-3"*/}
            {/*                hidden={renderer(VS.VS.rows[0].userId)}*/}
            {/*                    onFocus={() => {*/}
            {/*                        setUserId(user.checkUser.id)*/}
            {/*                        setVSid(VS.VS.rows[0].id)*/}
            {/*                        setTypeId(VS.VS.rows[0].typeId)*/}
            {/*                        setUserOpp('imgfu')*/}
            {/*                    }}*/}
            {/*                    onClick={addImage}*/}
            {/*            >ADD*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </Col>*/}

            {/*    <Col style={{maxWidth: '50%'}}>*/}
            {/*        <div className="d-flex flex-column align-items-center">*/}
            {/*            ФИНАЛКА*/}
            {/*            <a href={VS.VS.rows[0].imgfo === null ? process.env.REACT_APP_API_URL + 'final.jpg' : process.env.REACT_APP_API_URL + VS.VS.rows[0].typeId +'/' + VS.VS.rows[0].imgfo} target="_blank">*/}
            {/*                <Image style={{ border: '5px solid lightgray'}} width={300} height={300}*/}
            {/*                   src={VS.VS.rows[0].imgfo === null ? process.env.REACT_APP_API_URL + 'final.jpg' : process.env.REACT_APP_API_URL + VS.VS.rows[0].typeId +'/' + VS.VS.rows[0].imgfo}/></a>*/}

            {/*            <Form.Control style={{maxWidth: '50%'}}  className="mt-1"*/}
            {/*                          hidden={renderer(VS.VS.rows[0].oppUserId)}*/}
            {/*                          type="file"*/}
            {/*                          onChange={selectFile}*/}
            {/*            />*/}
            {/*            <Button variant="outline-secondary" size="sm" className="mt-1 mb-3"*/}
            {/*                    hidden={renderer(VS.VS.rows[0].oppUserId)}*/}
            {/*                    onFocus={() => {*/}
            {/*                        setUserId(user.checkUser.id)*/}
            {/*                        setVSid(VS.VS.rows[0].id)*/}
            {/*                        setTypeId(VS.VS.rows[0].typeId)*/}
            {/*                        setUserOpp('imgfo')*/}
            {/*                    }}*/}
            {/*                    onClick={addImage}*/}
            {/*            >ADD*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*2*/}
            {/*<Row className="mt-3">*/}
            {/*    <Col style={{maxWidth: '50%'}}>*/}
            {/*        <div className="d-flex flex-column align-items-center">*/}
            {/*            АРТЕФАКТЫ*/}
            {/*            <a href={VS.VS.rows[0].imgfuart === null ? process.env.REACT_APP_API_URL + 'final.jpg' : process.env.REACT_APP_API_URL + VS.VS.rows[0].typeId +'/' + VS.VS.rows[0].imgfuart} target="_blank">*/}
            {/*                <Image style={{ border: '5px solid lightgray'}} width={300} height={300}*/}
            {/*                       src={VS.VS.rows[0].imgfuart === null ? process.env.REACT_APP_API_URL + 'final.jpg' : process.env.REACT_APP_API_URL + VS.VS.rows[0].typeId +'/' + VS.VS.rows[0].imgfuart}/></a>*/}
            {/*            <Form.Control style={{maxWidth: '50%'}}  className="mt-1"*/}
            {/*                          hidden={renderer(VS.VS.rows[0].userId)}*/}
            {/*                          type="file"*/}
            {/*                          onChange={selectFile}*/}
            {/*            />*/}
            {/*            <Button variant="outline-secondary" size="sm" className="mt-1"*/}
            {/*                    hidden={renderer(VS.VS.rows[0].userId)}*/}
            {/*                    onFocus={() => {*/}
            {/*                        setUserId(user.checkUser.id)*/}
            {/*                        setVSid(VS.VS.rows[0].id)*/}
            {/*                        setTypeId(VS.VS.rows[0].typeId)*/}
            {/*                        setUserOpp('imgfuart')*/}
            {/*                    }}*/}
            {/*                    onClick={addImage}*/}
            {/*            >ADD*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </Col>*/}

            {/*    <Col style={{maxWidth: '50%'}}>*/}
            {/*        <div className="d-flex flex-column align-items-center">*/}
            {/*            АРТЕФАКТЫ*/}
            {/*            <a href={VS.VS.rows[0].imgfoart === null ? process.env.REACT_APP_API_URL + 'final.jpg' : process.env.REACT_APP_API_URL + VS.VS.rows[0].typeId +'/' + VS.VS.rows[0].imgfoart} target="_blank">*/}
            {/*                <Image style={{ border: '5px solid lightgray'}} width={300} height={300}*/}
            {/*                       src={VS.VS.rows[0].imgfoart === null ? process.env.REACT_APP_API_URL + 'final.jpg' : process.env.REACT_APP_API_URL + VS.VS.rows[0].typeId +'/' + VS.VS.rows[0].imgfoart}/></a>*/}

            {/*            <Form.Control style={{maxWidth: '50%'}}  className="mt-1"*/}
            {/*                          hidden={renderer(VS.VS.rows[0].oppUserId)}*/}
            {/*                          type="file"*/}
            {/*                          onChange={selectFile}*/}
            {/*            />*/}
            {/*            <Button variant="outline-secondary" size="sm" className="mt-1 mb-3"*/}
            {/*                    hidden={renderer(VS.VS.rows[0].oppUserId)}*/}
            {/*                    onFocus={() => {*/}
            {/*                        setUserId(user.checkUser.id)*/}
            {/*                        setVSid(VS.VS.rows[0].id)*/}
            {/*                        setTypeId(VS.VS.rows[0].typeId)*/}
            {/*                        setUserOpp('imgfoart')*/}
            {/*                    }}*/}
            {/*                    onClick={addImage}*/}
            {/*            >ADD*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

            {/*/!*3*!/*/}
            {/*<Row className="mt-3">*/}
            {/*    <Col style={{maxWidth: '50%'}}>*/}
            {/*        <div className="d-flex flex-column align-items-center">*/}
            {/*            КАРТА*/}
            {/*            <a href={VS.VS.rows[0].imgfucart === null ? process.env.REACT_APP_API_URL + 'final.jpg' : process.env.REACT_APP_API_URL + VS.VS.rows[0].typeId +'/' + VS.VS.rows[0].imgfucart} target="_blank">*/}
            {/*                <Image style={{ border: '5px solid lightgray'}} width={300} height={300}*/}
            {/*                       src={VS.VS.rows[0].imgfucart === null ? process.env.REACT_APP_API_URL + 'final.jpg' : process.env.REACT_APP_API_URL + VS.VS.rows[0].typeId +'/' + VS.VS.rows[0].imgfucart}/></a>*/}
            {/*            <Form.Control style={{maxWidth: '50%'}}  className="mt-1"*/}
            {/*                          hidden={renderer(VS.VS.rows[0].userId)}*/}
            {/*                          type="file"*/}
            {/*                          onChange={selectFile}*/}
            {/*            />*/}
            {/*            <Button variant="outline-secondary" size="sm" className="mt-1 mb-3"*/}
            {/*                    hidden={renderer(VS.VS.rows[0].userId)}*/}
            {/*                    onFocus={() => {*/}
            {/*                        setUserId(user.checkUser.id)*/}
            {/*                        setVSid(VS.VS.rows[0].id)*/}
            {/*                        setTypeId(VS.VS.rows[0].typeId)*/}
            {/*                        setUserOpp('imgfucart')*/}
            {/*                    }}*/}
            {/*                    onClick={addImage}*/}
            {/*            >ADD*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </Col>*/}

            {/*    <Col style={{maxWidth: '50%'}}>*/}
            {/*        <div className="d-flex flex-column align-items-center">*/}
            {/*            КАРТА*/}
            {/*            <a href={VS.VS.rows[0].imgfocart === null ? process.env.REACT_APP_API_URL + 'final.jpg' : process.env.REACT_APP_API_URL + VS.VS.rows[0].typeId +'/' + VS.VS.rows[0].imgfocart} target="_blank">*/}
            {/*                <Image style={{ border: '5px solid lightgray'}} width={300} height={300}*/}
            {/*                       src={VS.VS.rows[0].imgfocart === null ? process.env.REACT_APP_API_URL + 'final.jpg' : process.env.REACT_APP_API_URL + VS.VS.rows[0].typeId +'/' + VS.VS.rows[0].imgfocart}/></a>*/}

            {/*            <Form.Control style={{maxWidth: '50%'}}  className="mt-1"*/}
            {/*                          hidden={renderer(VS.VS.rows[0].oppUserId)}*/}
            {/*                          type="file"*/}
            {/*                          onChange={selectFile}*/}
            {/*            />*/}
            {/*            <Button variant="outline-secondary" size="sm" className="mt-1 mb-3"*/}
            {/*                    hidden={renderer(VS.VS.rows[0].oppUserId)}*/}
            {/*                    onFocus={() => {*/}
            {/*                        setUserId(user.checkUser.id)*/}
            {/*                        setVSid(VS.VS.rows[0].id)*/}
            {/*                        setTypeId(VS.VS.rows[0].typeId)*/}
            {/*                        setUserOpp('imgfocart')*/}
            {/*                    }}*/}
            {/*                    onClick={addImage}*/}
            {/*            >ADD*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*END IMAGE*/}

        </Container>
    );

};

export default VSPage;
