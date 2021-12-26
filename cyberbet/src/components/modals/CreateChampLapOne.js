import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createChampLapOne} from "../../http/deviceAPI";

const CreateTableChampOne = ({show, onHide}) => {

    const [dated, setDated] = useState('')
    const [map, setMap] = useState('')

    const addType = () => {
        try{
            createChampLapOne({dated: dated, map: map}).then(data => {
                // setDated('')
                // setMap('')
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
                    Создание одного круга рандома
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="m-2">
                    <Form.Control
                        value={dated}
                        onChange={e => setDated(e.target.value)}
                        placeholder={"Чемпионат"}
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                return addType()
                            }
                        }}
                    />
                    <Form.Control
                        className="mt-2"
                        value={map}
                        onChange={e => setMap(e.target.value)}
                        placeholder={"Карта"}
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

export default CreateTableChampOne;
