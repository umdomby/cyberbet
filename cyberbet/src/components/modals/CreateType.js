import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";

const CreateType = ({show, onHide}) => {
    const [description, setDescription] = useState('HEROES HOTA')
    const [nametype, setNametype] = useState('')
    const [amount, setAmount] = useState(0)
    const [grandprix, setGrandprix] = useState(false)

    const checkGrandprix = () => setGrandprix(!grandprix)

    const addType = () => {
        try{
            createType({nametype, description, amount, grandprix}).then(data => {
                setAmount('')
                setNametype('')
                setDescription('')
                setGrandprix(false)
                onHide()
            })
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
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="m-2">
                    <Form.Control
                        value={nametype}
                        onChange={e => setNametype(e.target.value)}
                        placeholder={"Чемпионат"}
                    />
                </Form>
                <Form className="m-2">
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={"NAME GAME"}
                        // onKeyPress={event => {
                        //     if (event.key === "Enter") {
                        //         return addType()
                        //     }
                        // }}
                    />
                </Form>
                <Form className="m-2 mt-3">
                    Взносы
                    <Form.Control
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        placeholder={"Сумма взносов"}
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                return addType()
                            }
                        }}
                    />
                </Form>
                <div className="ml-2 mt-3">Grand Prix
                    <input
                        type="checkbox"
                        className="ml-2"
                        checked={grandprix}
                        onClick={checkGrandprix}
                    />
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
