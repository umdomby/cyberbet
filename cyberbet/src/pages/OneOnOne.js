import React, {useContext, useEffect, useRef, useState} from 'react';
import {Context} from "../index";
import '../css/app.css'
import {Button, Col, Row, Spinner} from "react-bootstrap";
import axios from "axios";
import moment from "moment";
import CreateOneOnOne from "../components/modals/CreateOneOnOne";
import {fetchDevices} from "../http/deviceAPI";
import {checkUserData} from "../http/userDataAPI";


const OneOnOne = () => {
    const [loading, setloading] = useState(true)
    const {user, userdata, device} = useContext(Context)
    // const params = useParams()
    // const canvasRef = useRef()
    // const usernameRef = useRef()
    const [messages, setMessages] = useState([]);
    const [value, setValue] = useState('');
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [dBoneOnOne, setDBOneOnOne] = useState([])

    const [createOneOnOne, setCreateOneOnOne] = useState(false)

    useEffect(() => {
        // axios.get(process.env.REACT_APP_API_URL+`api/ws/image?id=${params.id}`)

        axios.get(process.env.REACT_APP_API_URL+`api/ws/image`)
            .then(response => {
                console.log(response.data)
            })

        // axios.get(process.env.REACT_APP_API_URL+`api/ws/create/oneonone`)
        //     .then(response => {
        //         console.log(setDBOneOnOne(response.data))
        //     })
    }, [])

    useEffect(() => {
        setInterval(()=> socketTest(), 5000)
    }, [])

    useEffect(() => {
        if (userdata.userData.username){
            //console.log('userdata')
            wsConnect(userdata.userData.username)
        }
    }, [userdata.userData.username])

    useEffect(() => {
        setTimeout(() => {
            if(user.isAuth === false){
                wsConnect('anonymous')
            }
        },1000);
    }, [])


    const wsConnect = (username) => {
        device.setWebSocket(new WebSocket(process.env.REACT_APP_API_URL_WS))
        device.webSocket.onopen = () => {
            device.webSocket.send(JSON.stringify({
                id: '1',
                //username: userdata.userData.username ? userdata.userData.username : anonymous,
                username: username,
                method: "connection"
            }))
        }
        device.webSocket.onmessage = (event) => {
            let msg = JSON.parse(event.data)
            // let a = let msg = JSON.parse(event.data.clientMessage)
            if(device.webSocket.readyState !== device.webSocket.CLOSED && device.webSocket.readyState !== device.webSocket.CLOSING) {
                switch (msg.method) {
                    case "connection":
                        //setDBOneOnOne(msg.one_on_one)
                        //console.log(`пользователь ${msg.username} присоединился`)
                        break
                    case "draw":
                        // console.log(`пользователь ${msg.username} ${msg.message}`)
                        // setMessages(prev => [msg, ...prev])
                        setMessages(msg.chat)
                        // for (var i in msg.chat){
                        //     console.log(msg.chat[i])
                        // }
                        break
                    case "online":
                        setOnlineUsers(msg.clientsNoRepeatUsers)
                        // for (var i in msg.clientsNoRepeatUsers){
                        //     console.log(msg.clientsNoRepeatUsers[i])
                        // }
                        break
                    case "game":
                        setDBOneOnOne(msg.one_on_one)
                        // for (var i in msg.one_on_one){
                        //     console.log(msg.one_on_one[i])
                        // }
                        break
                    // default:
                    //     console.log(msg)
                }
            }
        }
    }

    // const oneOneOneFalse = () => {
    //     device.setOneOnOne(false)
    // }

    // const wsClosed = () => {
    //     device.webSocket.onclose  = function () {}
    //     device.webSocket.close()
    // }

    const socketTest = () => {
        if (device.webSocket.readyState === device.webSocket.CLOSED || device.webSocket.readyState === device.webSocket.CLOSING) {
            wsConnect(userdata.userData.username ? userdata.userData.username : 'anonymous')
        }
    }

    // const mouseDownHandler = () => {
    //     axios.post(process.env.REACT_APP_API_URL+`api/ws/image`, {
    //         method: 'draw',
    //         id: '1',
    //         idDate: Date.now(),
    //         username: userdata.userData.username,
    //         message: value,
    //     }).then(response => {
    //             console.log(response.data.username, response.data.message)
    //             setMessages(prev => [response.data, ...prev])
    //         })
    //     setValue('')
    // }

    // const handlerWS = () =>{
    //     device.webSocket.send(JSON.stringify({
    //         method: 'draw',
    //         id: '1',
    //         idDate: Date.now(),
    //         username: userdata.userData.username,
    //         message: value,
    //     }))
    // }

    const sendMessage = () => {
        device.webSocket.send(JSON.stringify({
            method: 'draw',
            id: '1',
            date: Date.now(),
            username: userdata.userData.username,
            message: value,
        }))
        setValue('')
    }

    return (
        <div tyle={{maxWidth: '100%'}}>
            {/*<label className="ml-4" onClick={oneOneOneFalse} style={{cursor:'pointer'}}>Главная</label>*/}
            {/*<button onClick={wsClosed}>ws close</button>*/}
            {/*<div className="d-flex h-100 justify-content-center align-self-center">*/}
            <div className="mt-2 ml-4 mr-4">
                {/*<div>*/}
                    {/*<button onClick={() => mouseDownHandler()} ref={canvasRef}>sum</button>*/}
                    {/*<button onClick={handlerWS}>sum</button>*/}
                {/*</div>*/}
                <div>
                    <Row>
                        <Col style={{maxWidth: '30%', minWidth: '30%'}}>
                            GAME
                            <CreateOneOnOne show={createOneOnOne} onHide={() => setCreateOneOnOne(false)}/>
                            <div className="message">
                                {dBoneOnOne.map(oneonone =>
                                    <div key={oneonone.id}>
                                        {oneonone.game} {oneonone.username} {oneonone.description} {oneonone.amount} {oneonone.time}
                                    </div>
                                )}
                            </div>
                            <Button
                                disabled={!user.isAuth}
                                variant={"outline-dark"}
                                className="mt-4 p-2"
                                onClick={() => setCreateOneOnOne(true)}
                            >
                                ADD GAME
                            </Button>
                        </Col>
                        <Col style={{maxWidth: '50%', minWidth: '50%'}}>
                            ЧАТ  {device.webSocket.readyState === device.webSocket.CLOSED || device.webSocket.readyState === device.webSocket.CLOSING ? <Spinner style={{marginBottom: '3px', maxHeight: '15px', maxWidth: '15px'}} animation={"grow"}>__Load</Spinner> : '' }
                            <div className="message">
                                {messages.map(mess =>
                                    <div key={mess.id}>
                                        {moment(mess.date).format('YYYY-MM-DD HH:mm')}: {mess.username} {mess.message}
                                    </div>
                                )}
                            </div>
                            <div className="mt-2">
                                <div className="form">
                                    <input
                                        disabled={!user.isAuth}
                                           onKeyPress={event => {
                                               if (event.key === "Enter") {
                                                   // alert.show("Дата изменена")
                                                   return sendMessage()
                                               }
                                           }}
                                        value={value} onChange={e => setValue(e.target.value)} type="text"
                                    />
                                    {user.isAuth?
                                        <button onClick={sendMessage}>Отправить</button>
                                        // <button onClick={sendMessage}>Отправить</button>
                                        :
                                        'Авторизуйтесь для отправления сообщений '
                                    }
                                </div>
                            </div>
                        </Col>
                        <Col style={{maxWidth: '20%', minWidth: '20%'}}>
                            ONLINE
                            <div className="message">
                                {onlineUsers.map((online, index) =>
                                <div key={index}>
                                    {online}
                                </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default OneOnOne;
