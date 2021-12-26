import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {createChampLap} from "../../http/deviceAPI";

const CreateTableChamp = ({show, onHide}) => {

    const [dated, setDated] = useState('')
    //const [map, setMap] = useState('')

    const addType = () => {
        try{
            //createChampLap({dated: dated, map: map}).then(data => {
            createChampLap({dated: dated}).then(data => {
                setDated('')
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
                    Создание всех кругов рандома
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
                    {/*<Form.Control*/}
                    {/*    className="mt-2"*/}
                    {/*    value={map}*/}
                    {/*    onChange={e => setMap(e.target.value)}*/}
                    {/*    placeholder={"Карта. Пустое поле = все карты."}*/}
                    {/*    onKeyPress={event => {*/}
                    {/*        if (event.key === "Enter") {*/}
                    {/*            return addType()*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*/>*/}
                </Form>
                {/*<Form className="m-2">*/}
                {/*    <Form.Control*/}
                {/*        value={dateNew}*/}
                {/*        onChange={e => setDateNew(e.target.value)}*/}
                {/*        placeholder={"Введите дату следующего круга"}*/}
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
