import React, {useContext, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createOneOnOne} from "../../http/wsAPI";
import {Context} from "../../index";
//import {sendMessageMethod} from "../../pages/OneOnOne";
// import OneOnOne from "../../pages/OneOnOne";

const CreateOneOnOne = ({show, onHide}) => {
    const {userdata, device} = useContext(Context)
    const [description, setDescription] = useState('')
    const [game, setGame] = useState('HEROES HOTA')
    const [amount, setAmount] = useState('')
    const [time, setTime] = useState('')

    const addType = () => {
        try{
            // createOneOnOne({id:userdata.userData.userId, username: userdata.userData.username, game, description, amount, time}).then(data => {
            //     // setNametype('')
            //     // setAmount('')
            //     // setDescription('')
            //     // setTime('')
            //     onHide()
            // })

            device.webSocket.send(JSON.stringify({
                method: 'game',
                id: '1',
                game: game,
                description: description,
                amount: amount,
                time: time,
                idDate: Date.now(),
                username: userdata.userData.username,
            }))
            onHide()
            // OneOnOne.sendMessageMethod('dasd')
        }catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить игру
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="m-2">
                    <Form.Control
                        value={game}
                        onChange={e => setGame(e.target.value)}
                        // placeholder={"Название игры"}
                    />
                </Form>
                <Form className="m-2">
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={"Описание"}
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                return addType()
                            }
                        }}
                    />
                </Form>
                <Form className="m-2 mt-3">
                    Ставка руб.
                    <Form.Control
                        value={amount}
                        onChange={e => setAmount(e.target.value)} placeholder={"ставка"}
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                return addType()
                            }
                        }}
                    />
                </Form>

                <Form className="m-2 mt-3">
                    Время существование регистрации в мин.
                    <Form.Control
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        placeholder={"Time"}
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                return addType()
                            }
                        }}
                    />
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateOneOnOne;
