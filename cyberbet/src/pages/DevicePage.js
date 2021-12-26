import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Row, Image, Form, Spinner} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {Link, useParams} from 'react-router-dom'
import {
    createImg,
    fetchOneDevice, imgPhoto, imgPhotoGet,
    postDataFacebook,
    postDataInstagram, postDataOK,
    postDataRating,
    postDataTelegram,
    postDataTwitch, postDataVK, postDataYoutube
} from "../http/deviceAPI";
import moment from 'moment'
import ru from 'moment/locale/ru'
import {Context} from "../index";
import {observer} from "mobx-react";
import {checkUserData, fetchPromo} from "../http/userDataAPI";
import DevicePage_userWinChamp from "../components/DevicePage_userWinChamp";
import DevicePage_userWin from "../components/DevicePage_userWin";
import CreateQiwi from "../components/modals/CreateQiwi";


const DevicePage = observer (() => {
    const {id} = useParams()
    const {user, userdata} = useContext(Context)
    const [loading1, setLoading1] = useState(true)
    // const [loading2, setLoading2] = useState(true)
    const [loading3, setLoading3] = useState(true)
    const [loading4, setLoading4] = useState(true)
    const [device, setDevice] = useState({})
    const [userId, setUserId] = useState(0)
    const [userdataId, setUserdataId] = useState(0)
    const [qiwiVisible, setQiwiVisible] = useState(false)

    const [ratingValue, setRatingValue] = useState(0)
    const [TwitchValue, setTwitchValue] = useState('')
    const [YoutubeValue, setYoutubeValue] = useState('')
    const [FacebookValue, setFacebookValue] = useState('')
    const [InstagramValue, setInstagramValue] = useState('')
    const [TelegramValue, setTelegramValue] = useState('')
    const [VKValue, setVKValue] = useState('')
    const [OKValue, setOKValue] = useState('')
    const [ratingValue_, setRatingValue_] = useState(0)
    const [TwitchValue_, setTwitchValue_] = useState('')
    const [YoutubeValue_, setYoutubeValue_] = useState('')
    const [FacebookValue_, setFacebookValue_] = useState('')
    const [InstagramValue_, setInstagramValue_] = useState('')
    const [TelegramValue_, setTelegramValue_] = useState('')
    const [VKValue_, setVKValue_] = useState('')
    const [OKValue_, setOKValue_] = useState('')

    // const [file, setFile] = useState(null)
    const [promo, setPromo] = useState(0)
    const [donatesCyberbet, setDonatesCyberbet] = useState(0)
    const [donatesTypes, setDonatesTypes] = useState(0)
    const [donatesUsers, setDonatesUsers] = useState(0)
    const [donatesGame, setDonatesGame] = useState(0)
    const [donatesFund, setDonatesFund] = useState(0)
    const [ratingCyberbet, setRatingCyberbet] = useState(0)
    const [ratingMapCyberbet, setRatingMapCyberbet] = useState(0)
    // const [imgPhoto, setImgPhoto] = useState('photo.jpg')
    const [useEffectBool, setUseEffectBool] = useState(true)
    const [userWinBoolChamp, setUserWinBoolChamp] = useState(false)

    useEffect(() => {
        if(useEffectBool) {
            fetchOneDevice(id).then(data => {
                //setDevice(data.deviceUserData.rows[0])
                userdata.setUserWin(data.userWin)
                userdata.setUserWinOpp(data.userWinOpp)
                userdata.setCountWin(data.countWin)
                userdata.setCountLoss(data.countLoss)
                setUserWinBoolChamp(data.userWinBoolChamp)
                setDonatesTypes(data.dTypes)
                setDonatesCyberbet(data.dCyberbet)
                setDonatesUsers(data.dUsers)
                setDonatesGame(data.pGame)
                setDonatesFund(data.pFund)
                setRatingCyberbet(data.rating)
                setRatingMapCyberbet(data.ratingcymap)
                const a = 0
            }).finally(() => setLoading1(false))
                //imgPhotoGet(id).then(data => setImgPhoto(data)).finally(() => setLoading2(false))
            setUseEffectBool(false)
        }
        //setTimeout(() => {
        //},1000);
        //imgPhotoGet(id).then(data => setImgPhoto(data)).finally(() => setLoading2(false))
        fetchPromo(id).then(data => setPromo(data)).finally(() => setLoading3(false))

    }, [])


    useEffect(() => {
            fetchOneDevice(id).then(data => {
                setDevice(data.deviceUserData.rows[0])
            }).finally(() => setLoading4(false))
    }, [ratingValue,TwitchValue,YoutubeValue,FacebookValue,InstagramValue,TelegramValue,VKValue,OKValue])

    if (loading1 && loading3 && loading4) {return <Spinner animation={"grow"}/>}

    // const selectFile = e => {
    //     setUserId(user.checkUser.id)
    //     setUserdataId(user.checkUser.userdataid)
    //     setFile(e.target.files[0])
    // }

    const renderer = (a) => {
        if (userdata.userData.userId === a) {
            return false
        }
        else {
            return true
        }
    };

    // const addImage = () => {
    //     const formData = new FormData()
    //     formData.append('id', userId)
    //     formData.append('userdataId', userdataId)
    //     formData.append('img', file)
    //     createImg(formData).then(data => setImgPhoto(data))
    //     setFile('')
    // }

    const dataRating = async () => {
        try{ await postDataRating(userId, userdataId, ratingValue_).then(data => setRatingValue(data));
             alert("Рейтинг изменен на: " + ratingValue_)
            setRatingValue('')
        }
        catch (e) {alert(e.response.data.message)}}

    const dataTwitch = async () => {
        try{ await postDataTwitch(userId, userdataId, TwitchValue_).then(data => setTwitchValue(data));
            alert("Twitch изменен на: " + TwitchValue_)
        }
        catch (e) {alert(e.response.data.message)}}

    const dataYoutube = async () => {
        try{ await postDataYoutube(userId, userdataId, YoutubeValue_).then(data => setYoutubeValue(data));
            alert("Youtube изменен на: " + YoutubeValue_)}
        catch (e) {alert(e.response.data.message)}}

    const dataFacebook = async () => {
        try{ await postDataFacebook(userId, userdataId, FacebookValue_).then(data => setFacebookValue(data));
            alert("Facebook изменен на: " + FacebookValue_)}
        catch (e) {alert(e.response.data.message)}}

    const dataInstagram = async () => {
        try{ await postDataInstagram(userId, userdataId, InstagramValue_).then(data => setInstagramValue(data));
            alert("Instagram изменен на: " + InstagramValue_)}
        catch (e) {alert(e.response.data.message)}}

    const dataTelegram = async () => {
        try{ await postDataTelegram(userId, userdataId, TelegramValue_).then(data => setTelegramValue(data));
            alert("Telegram изменен на: " + TelegramValue_)}
        catch (e) {alert(e.response.data.message)}}

    const dataVK = async () => {
        try{ await postDataVK(userId, userdataId, VKValue_).then(data => setVKValue(data));
            alert("VK изменен на: " + VKValue_)}
        catch (e) {alert(e.response.data.message)}}

    const dataOK = async () => {
        try{ await postDataOK(userId, userdataId, OKValue_).then(data => setOKValue(data));
            alert("OK изменен на: " + OKValue_)}
        catch (e) {alert(e.response.data.message)}}


    return (
        <Container className="mt-3">
            <Row>
                <Col style={{maxWidth: '50%'}}>
                    <div className="d-flex flex-column align-items-left">
                        <h3>{device.username}</h3>
                        <h3>Аккаунт создан: </h3>
                        {moment(device.datecreated).locale("ru").format('llll')}
                        <h5 className="mt-3">Rating cyberbet GP {ratingCyberbet}</h5>
                        <h5>Rating cyberbet Map {ratingMapCyberbet}</h5>
                        <h5>Привлеченных пользователей: {promo}</h5>
                        <h5>Donates to championship: {donatesTypes} руб.</h5>
                        <h5>Donates to cyberbet: {donatesCyberbet} руб.</h5>
                        <h5>Donates to users: {donatesUsers} руб.</h5>
                        <h5>Payment to game: {donatesGame} руб.</h5>
                        <h5>Fund to game: {donatesFund} руб.</h5>
                        <h5>Игр: {userdata.countWin + userdata.countLoss}</h5>
                        <h5>Побед: {userdata.countWin}</h5>
                        <h5>Поражений: {userdata.countLoss}</h5>
                        <h5>Bank: {device.user_fund} руб.</h5>
                        <Button
                            style={{maxWidth: '100%',minWidth: '200px'}}
                            variant={"warning"}
                            onClick={() => setQiwiVisible(true)}
                            className="mr-1"
                        >
                            DONATE {device.username}
                        </Button>
                        <CreateQiwi show={qiwiVisible} onHide={() => setQiwiVisible(false)} nametype={device.username} code_transaction={3}/>
                        {/*<h2 className="mt-5">BET: {device.bet}</h2>*/}
                        {/*<h5>(ставки временно не работают)</h5>*/}
                    </div>
                </Col>
                <Col style={{maxWidth: '50%'}}>
                    <div className="d-flex flex-column align-items-center">
                        <h2>Rating</h2>
                        <div style={{backgroundColor: 'transparent', textAlign: 'center', border: 'none', fontSize: 22}}>Hota</div>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:24}}
                        >
                            <input disabled={renderer(device.userId)} style={{backgroundColor: 'transparent', textAlign: 'center', border: 'none', width: 120,fontSize: 50}} type="text"
                                   defaultValue={device.rating}
                                   onClick={() => {
                                       setUserId(user.checkUser.id)
                                       setUserdataId(user.checkUser.userdataid);
                                   }}
                                   onInput={() => {
                                       setUserId(user.checkUser.id)
                                       setUserdataId(user.checkUser.userdataid);
                                   }}
                                   onChange={(event) => setRatingValue_(event.target.value)}
                                   onKeyPress={event => {
                                       if (event.key === "Enter") {
                                           return dataRating()
                                       }
                                   }}
                            />
                        </div>
                    </div>
                </Col>

                {/*<Col style={{maxWidth: '33%'}}>*/}
                {/*    <div className="d-flex flex-column align-items-end">*/}
                {/*        <Image style={{ border: '5px solid lightgray'}} width={300} height={300}*/}
                {/*               src={device.img === null ? process.env.REACT_APP_API_URL + 'photo/' + 'photo.jpg' : process.env.REACT_APP_API_URL + 'photo/' + imgPhoto}/>*/}
                {/*        <Form.Control style={{maxWidth: '80%'}}  className="mt-3"*/}
                {/*            hidden={renderer(device.userId)}*/}
                {/*            type="file"*/}
                {/*            onChange={selectFile}*/}
                {/*        />*/}
                {/*        <Button variant="outline-secondary" size="sm" className="mt-2"*/}
                {/*            hidden={renderer(device.userId)}*/}
                {/*            // onFocus={() => {*/}
                {/*            //     setUserId(user.checkUser.id)*/}
                {/*            //     setUserdataId(user.checkUser.userdataid)*/}
                {/*            // }}*/}
                {/*            onClick={addImage}*/}
                {/*        >Добавить*/}
                {/*        </Button>*/}
                {/*    </div>*/}
                {/*</Col>*/}
            </Row>

            <div style={{maxWidth: '100%', marginBottom: '40px'}} className="mt-4">
                {userWinBoolChamp ? <DevicePage_userWinChamp/> : ""}

            <DevicePage_userWin/>

            </div>
            <Row className="d-flex flex-column m-3">
                <h2>Info:</h2>
                <h4><Link to={{ pathname: device.twitch }} target="_blank">Twitch: </Link>
                    <input disabled={renderer(device.userId)} style={{backgroundColor: 'transparent', textAlign: 'left', border: 'none', width: 520,fontSize: 24}} type="text"
                           defaultValue={device.twitch}
                           onClick={() => {
                               setUserId(user.checkUser.id)
                               setUserdataId(user.checkUser.userdataid);
                           }}
                           onInput={() => {
                               setUserId(user.checkUser.id)
                               setUserdataId(user.checkUser.userdataid);
                           }}
                           onChange={(event) => setTwitchValue_(event.target.value)}
                           onKeyPress={event => {
                               if (event.key === "Enter") {
                                   return dataTwitch()
                               }
                           }}
                /></h4>
                <h4><Link to={{ pathname: device.youtube }} target="_blank">Youtube: </Link>
                    <input disabled={renderer(device.userId)} style={{backgroundColor: 'transparent', textAlign: 'left', border: 'none', width: 520,fontSize: 24}} type="text"
                           defaultValue={device.youtube}
                           onClick={() => {
                               setUserId(user.checkUser.id)
                               setUserdataId(user.checkUser.userdataid);
                           }}
                           onInput={() => {
                               setUserId(user.checkUser.id)
                               setUserdataId(user.checkUser.userdataid);
                           }}
                           onChange={(event) => setYoutubeValue_(event.target.value)}
                           onKeyPress={event => {
                               if (event.key === "Enter") {
                                   return dataYoutube()
                               }
                           }}
                    /></h4>
                <h4><Link to={{ pathname: device.facebook }} target="_blank">Facebook: </Link>
                    <input disabled={renderer(device.userId)} style={{backgroundColor: 'transparent', textAlign: 'left', border: 'none', width: 520,fontSize: 24}} type="text"
                           defaultValue={device.facebook}
                           onClick={() => {
                               setUserId(user.checkUser.id)
                               setUserdataId(user.checkUser.userdataid);
                           }}
                           onInput={() => {
                               setUserId(user.checkUser.id)
                               setUserdataId(user.checkUser.userdataid);
                           }}
                           onChange={(event) => setFacebookValue_(event.target.value)}
                           onKeyPress={event => {
                               if (event.key === "Enter") {
                                   return dataFacebook()
                               }
                           }}
                    /></h4>
                <h4><Link to={{ pathname: device.instagram }} target="_blank">Instagram: </Link>
                    <input disabled={renderer(device.userId)} style={{backgroundColor: 'transparent', textAlign: 'left', border: 'none', width: 520,fontSize: 24}} type="text"
                           defaultValue={device.instagram}
                           onClick={() => {
                               setUserId(user.checkUser.id)
                               setUserdataId(user.checkUser.userdataid);
                           }}
                           onInput={() => {
                               setUserId(user.checkUser.id)
                               setUserdataId(user.checkUser.userdataid);
                           }}
                           onChange={(event) => setInstagramValue_(event.target.value)}
                           onKeyPress={event => {
                               if (event.key === "Enter") {
                                   return dataInstagram()
                               }
                           }}
                    /></h4>
                <h4><Link to={{ pathname: device.telegram }} target="_blank">Telegram: </Link>
                    <input disabled={renderer(device.userId)} style={{backgroundColor: 'transparent', textAlign: 'left', border: 'none', width: 520,fontSize: 24}} type="text"
                           defaultValue={device.telegram}
                           onClick={() => {
                               setUserId(user.checkUser.id)
                               setUserdataId(user.checkUser.userdataid);
                           }}
                           onInput={() => {
                               setUserId(user.checkUser.id)
                               setUserdataId(user.checkUser.userdataid);
                           }}
                           onChange={(event) => setTelegramValue_(event.target.value)}
                           onKeyPress={event => {
                               if (event.key === "Enter") {
                                   return dataTelegram()
                               }
                           }}
                    /></h4>
                <h4><Link to={{ pathname: device.vk }} target="_blank">VK: </Link>
                    <input disabled={renderer(device.userId)} style={{backgroundColor: 'transparent', textAlign: 'left', border: 'none', width: 520,fontSize: 24}} type="text"
                           defaultValue={device.vk}
                           onClick={() => {
                               setUserId(user.checkUser.id)
                               setUserdataId(user.checkUser.userdataid);
                           }}
                           onInput={() => {
                               setUserId(user.checkUser.id)
                               setUserdataId(user.checkUser.userdataid);
                           }}
                           onChange={(event) => setVKValue_(event.target.value)}
                           onKeyPress={event => {
                               if (event.key === "Enter") {
                                   return dataVK()
                               }
                           }}
                    /></h4>
                <h4><Link to={{ pathname: device.ok }} target="_blank">OK: </Link>
                    <input disabled={renderer(device.userId)} style={{backgroundColor: 'transparent', textAlign: 'left', border: 'none', width: 520,fontSize: 24}} type="text"
                           defaultValue={device.ok}
                           onClick={() => {
                               setUserId(user.checkUser.id)
                               setUserdataId(user.checkUser.userdataid);
                           }}
                           onInput={() => {
                               setUserId(user.checkUser.id)
                               setUserdataId(user.checkUser.userdataid);
                           }}
                           onChange={(event) => setOKValue_(event.target.value)}
                           onKeyPress={event => {
                               if (event.key === "Enter") {
                                   return dataOK()
                               }
                           }}
                    /></h4>

                <h4 className="mt-3">Партнёрка: {process.env.REACT_APP_NAME + device.username}
                    {/*<Button variant="outline-secondary" size="sm" className="ml-3"*/}
                    {/*    onClick={() => {navigator.clipboard.writeText(process.env.REACT_APP_NAME + device.username).then()}}*/}
                    {/*>скопировать</Button>*/}
                </h4>
            </Row>
        </Container>
    );
});

export default DevicePage;
