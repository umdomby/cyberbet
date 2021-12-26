import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Spinner, Dropdown} from "react-bootstrap";
import {fetchQiwi} from "../../http/qiwiAPI";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {checkUserData} from "../../http/userDataAPI";
import {checkUserPayGameDevice, userPayGameDevice} from "../../http/deviceAPI";

const CreateQiwi = observer(({show, onHide, nametype, typeid, code_transaction}) => {
    //code_transaction
    //1 - types donate brand
    //2 - cyberbet donate
    //3 - users donate
    //4 - pay game user
    //5 - fund-to-game
    //7 - types donate
    //8 - all pay types users


    const {user, device, userdata} = useContext(Context)
    const [pay, setPay] = useState('')
    const [payUserPayType, setPayUserPayType] = useState([])
    const [userStringDatabase, setUserStringDatabase] = useState('')
    const [userBrandStringDatabase, setUserBrandStringDatabase] = useState('')
    const [userBrandIdStringDatabase, setUserBrandIdStringDatabase] = useState('')
    const [login, setLogin] = useState('')
    const [description, setDescription] = useState('')
    const [brandName, setBrandName] = useState('')
    const [brandid, setBrandid] = useState(null)
    const [loading, setLoading] = useState(true)




    useEffect(() => {
        if(user.isAuth){
            setLogin(userdata.userData.username)
            if(code_transaction === 1) {
                setBrandName(device.brands[0].name)
                setBrandid(device.brands[0].id)
            }else{
                setBrandName('')
                setBrandid(null)
            }
        }
        if(code_transaction === 8 || code_transaction === 10) {
            userPayGameDevice(device.selectedType.id).then(data => {
                setPay(data.deviceGameName.rows.length * device.selectedType.amount)
                setPayUserPayType(data.deviceGameNameBrand)

                var userString = ''
                //var userStringBrand = ''
                var userStringBrandId = ''

                for(let i = 0; i < data.deviceGameNameBrand.rows.length; i++){
                    userString += data.deviceGameNameBrand.rows[i].dev_username + ';'
                    //userStringBrand += data.deviceGameNameBrand.rows[i].dev_brandname + ';'
                    userStringBrandId += data.deviceGameNameBrand.rows[i].brandId + ';'

                }
                setUserStringDatabase(userString)
                //setUserBrandStringDatabase(userStringBrand)
                setUserBrandIdStringDatabase(userStringBrandId)
            }
            ).finally(() => setLoading(false))
        }else{
            setPay('100')
        }
    }, [device.selectedType])

    if(code_transaction === 8 || code_transaction === 10) {
        if (loading) {
            return <Spinner animation={"grow"}/>
        }
    }

    const qiwi = async () => {
        try{
            if(login.length <= 25) {
                //let regexp = /^[A-Za-zА-Яа-я0-9_-]+$/i
                //if(regexp.test(login)) {
                if(code_transaction !== 8 && code_transaction !== 10){
                    await fetchQiwi(pay, login, nametype, typeid, description, brandName, brandid, code_transaction).then( data => {
                        //setValueBet(data)
                        window.open(
                            data,
                            '_blank' // <- opens the link in a new tab or window.
                        );
                    });
                }
                else if(code_transaction === 8 || code_transaction === 10){
                    await fetchQiwi(pay, login, userStringDatabase, typeid, description, userBrandIdStringDatabase, brandid, code_transaction).then( data => {
                        //setValueBet(data)
                        window.open(
                            data,
                            '_blank' // <- opens the link in a new tab or window.
                        );
                    });
                }
            }else{
                return alert("Login должен содержать не более 25 символов")
            }
            // if(login === '' || description === '') {
            //     return alert("Поля: (От кого) и (Комментарий) должны быть заполнены")
            // }
        }
        catch (e) {alert("Введите все данные " + e.response.data.message)}
    }

    const typeClick = (brand) => {
        setBrandName(brand.name)
        setBrandid(brand.id)
    }
    // const typeClickDefault = () => {
    //     setBrandName('cyberbet')
    //     setBrandid(0)
    // }


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    DONATE {nametype}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form className="m-2">

                    <label
                        style={{lineHeight: 1}}>
                        {code_transaction === 8 || code_transaction === 10? 'Сумма: RUS ' + pay + ' руб., all users to game' : 'Сумма: RUS ' + pay + ' руб.'}

                        {/*BEL: {(Number(pay)*0.034).toFixed(2)} руб., USD: {(Number(pay)/73.4776).toFixed(2)} $.*/}
                    </label>

                    <Form.Control
                        type="number"
                        disabled={code_transaction === 8 || code_transaction === 10 ? true : false}
                        value={pay}
                        onChange={e => setPay(e.target.value)}
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

                {code_transaction === 3 ?
                    <div className="m-3 d-flex">Donate to user: {nametype}</div>
                    :""
                }

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
                {code_transaction === 1 ?
                    <Dropdown
                        className="m-3 d-flex">
                        <div className="mr-3 d-flex">Выберите карту: </div>
                        <Dropdown.Toggle>{brandName || "Карта"}</Dropdown.Toggle>
                        {/*<Dropdown.Toggle>{device.brands[0].name}</Dropdown.Toggle>*/}
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => typeClick(brand)}
                                    key={brand.id}
                                >
                                    {"  " + brand.name}
                                    {/*<div> prize fund: {massiveChampStart.fund}</div>*/}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    : ""
                }

                {code_transaction === 7 ?
                    "" : ""
                }
                {code_transaction === 8 || code_transaction === 10?
                    <div>
                    {payUserPayType.rows.map((payUserPayType, index) =>
                            <div className="ml-3"
                                key={index}
                            >
                                {payUserPayType.dev_username} : {payUserPayType.dev_brandname}
                            </div>
                        )}
                    </div>
                    : ""
                }



                {/*<Form className="m-2 mt-5">*/}
                {/*    <label>*/}
                {/*        Список всех донатов*/}
                {/*        /!*<input type="text" value={this.state.value} onChange={} />*!/*/}
                {/*        /!*<input type="text" />*!/*/}
                {/*    </label>*/}
                {/*</Form>*/}

            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={qiwi}>Далее</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateQiwi;
