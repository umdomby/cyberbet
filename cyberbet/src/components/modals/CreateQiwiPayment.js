import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Spinner, Dropdown} from "react-bootstrap";
import {fetchQiwiPayment} from "../../http/qiwiAPI";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const CreateQiwiPayment = observer(({show, onHide, billid, pay, nametype, typeid, brandid, typeName, brandName, code_transaction}) => {

    const {user, device, userdata} = useContext(Context)
    // const [pay, setPay] = useState('')
    const [login, setLogin] = useState('')
    const [description, setDescription] = useState('')


    useEffect(() => {
            if(user.isAuth){
                    setLogin(userdata.userData.username)
            }
            // setPay(payQiwi)
        setDescription("Fund to game " + nametype + " " + typeName + " " + brandName)
    }, [device.selectedType])


    const qiwi = async () => {
        try{
            if(login.length <= 25) {
                    await fetchQiwiPayment(billid, pay, login, nametype, typeid, description, brandName, brandid, code_transaction).then( data => {
                        //setValueBet(data)
                        window.open(
                            data,
                            '_blank' // <- opens the link in a new tab or window.
                        );
                    });

            }else{
                return alert("Login должен содержать не более 25 символов")
            }
        }
        catch (e) {alert("Введите все данные " + e.response.data.message)}
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div>DONATE {nametype} </div>
                    <div>GAME: {device.selectedType.nametype}, {brandName}</div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form className="m-2">

                    <label style={{lineHeight: 1}}>
                        Сумма: RUS {pay} руб.,
                        {/*BEL: {(Number(pay)*0.034).toFixed(2)} руб., USD: {(Number(pay)/73.4776).toFixed(2)} $.*/}
                    </label>

                    <Form.Control
                        disabled={true}
                        type="number"
                        value={pay}
                        // onChange={e => setPay(e.target.value)}
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                return qiwi()
                            }
                        }}
                    />
                </Form>

                <Form className="m-2 mt-3">
                    <Form.Control
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        placeholder={"От кого:"}
                        //defaultValue={userdata.userData.username}
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                return qiwi()
                            }
                        }}
                    />
                </Form>


                <Form className="m-2">
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={"Комментарий"}
                        onKeyPress={event => {
                            if (event.key === "Enter") {
                                return qiwi()
                            }
                        }}
                    />
                </Form>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={qiwi}>Далее</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateQiwiPayment;
