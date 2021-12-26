import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createTableRandom} from "../../http/deviceAPI";

const CreateTableChamp = ({show, onHide}) => {

    const [nametype, setNametype] = useState('')
    // const [dateNew, setDateNew] = useState('')

    const addType = () => {
        try{
            //createTableRandom({nametype: nametype, datedNew: dateNew}).then(data => {
            createTableRandom({nametype: nametype}).then(data => {
                setNametype('')
                // setDateNew('')
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
                    Создание таблицы рандомов
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="m-2">
                    <Form.Control
                        value={nametype}
                        onChange={e => setNametype(e.target.value)}
                        placeholder={"Чемпионат"}
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                return addType()
                            }
                        }}
                    />
                </Form>
                {/*<Form className="m-2">*/}
                {/*    <Form.Control*/}
                {/*        value={dateNew}*/}
                {/*        onChange={e => setDateNew(e.target.value)}*/}
                {/*        placeholder={"Введите дату второго круга"}*/}
                {/*    />*/}
                {/*</Form>*/}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateTableChamp;
