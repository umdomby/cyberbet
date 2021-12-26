import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Spinner, Dropdown} from "react-bootstrap";
import {fetchFundGame, fetchQiwi} from "../../http/qiwiAPI";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {fetchTypesBrandIdname} from "../../http/deviceAPI";

const CreateFundGame = observer(({show, onHide, id, billid, pay, typeName, brandName, nametype, typeid, brandid, fundProps, code_transaction}) => {

    const {user, device, userdata} = useContext(Context)
    // const [pay, setPay] = useState('')
    const [login, setLogin] = useState('')
    const [description, setDescription] = useState('')
    // const [brandName, setBrandName] = useState('')
    const [fund, setFund] = useState(null)
    //const [fundGame, setFundGame] = useState(null)

    useEffect(() => {
            if(user.isAuth){
                setLogin(userdata.userData.username)
                setFund(fundProps)
            }
        setDescription("Fund to game " + typeName + " "+ brandName)
    }, [device.selectedType, fund, device.deviceRendering])

    const qiwi = async () => {
        try{
            {onHide()}
            // setFund(0)
            await fetchFundGame(id, billid, pay, login, nametype, typeid, description, brandName, brandid, code_transaction).then( data => {
                setFund(data)
            });
            device.setDeviceRendering(false)

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
                    FUND TO GAME
                    <div>{login}</div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form className="d-flex justify-content-center">

                    <label style={{lineHeight: 2}}>
                        <div>Взнос: {pay}руб.</div>
                        <div>Фонд: {fund}руб.</div>
                        FUND TO GAME {typeName}, {brandName}.
                        <div>Фонд({pay}руб.) - Взнос({pay}руб.) = Фонд составит: {fund-pay}руб.</div>
                    </label>

                </Form>

                <Form className="m-2 mt-3">
                    <Form.Control
                        disabled={true}
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
                <div className="d-flex justify-content-center mt-4 mb-3">
                    <Button variant="outline-success" onClick={qiwi}>GO TO GAME {typeName}, {brandName}</Button>
                </div>


            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                {/*<Button variant="outline-success" onClick={qiwi}>Далее</Button>*/}
            </Modal.Footer>
        </Modal>
    );
});

export default CreateFundGame;
