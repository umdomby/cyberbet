import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createBrand} from "../../http/deviceAPI";

const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('')
    const [brand, setBrand] = useState('')
    const [description, setDescription] = useState('')

    // const addBrand = () => {
    //     createBrand({idbrand, name: value}).then(data => {
    //         setValue('')
    //         setIdBrand(0)
    //         onHide()
    //     })
    // }

    const addBrand = async () => {
        try {
            const formData = new FormData()
            formData.append('name', value)
            formData.append('typeName', brand)
            formData.append('brand_description', description)
            await createBrand(formData).then(data => onHide())
        } catch (e) {
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
                    Добавить Brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="mb-2">
                    <Form.Control
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                        placeholder={"Чемпионат"}
                    />
                </Form>
                <Form className="mb-2">
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Карта"}
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                return addBrand()
                            }
                        }}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={'description'}
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                return addBrand()
                            }
                        }}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
