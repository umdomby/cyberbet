import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col, Spinner} from "react-bootstrap";
import {Context} from "../../index";
import {
    createDevice,
    fetchTypesBrandIdname,
} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";
// import './../../App.css'

const CreateDevice = observer(({show, onHide}) => {

    const {device, user, userdata} = useContext(Context)
    const [disabledBrand, setDisabledBrand] = useState('none')
    const [champ, setChamp] = useState('Championship')
    const [mapChamp, setMapChamp] = useState('Карта')
    const [massiveChampStart, setMassiveChampStart] = useState([])
    const [disabledButton, setDisabledButton] = useState(true)
    const [selectedBrand, setSelectedBrand] = useState(0)
    const [selectedType, setSelectedType] = useState({})
    const [grandPrix, setGrandPrix] = useState(false)
    const [brands, setBrands] = useState([
        {id: 1, name: 'JC'}
    ])

    const mapChampF = (brand) => {
        //device.setSelectedBrand(brand)
        setSelectedBrand(brand)
        setMapChamp(brand.name)
        setDisabledButton(false)
    }

    const typeClick = (type, grandprix, typeid) => {
        //device.setSelectedType(type)
        setSelectedType(type)
        setGrandPrix(grandprix)
        fetchTypesBrandIdname(typeid).then(data => setBrands(data))
        setDisabledBrand('inline')
        setChamp(type.nametype)
    }

    const addDevice = async () => {
        try {
            const formData = new FormData()
            formData.append('brandId', selectedBrand.id)
            formData.append('typeId', selectedType.id)
            formData.append('userId', user.checkUser.id)
            formData.append('userdatumId', userdata.userData.id)
            formData.append('grandprix', grandPrix)
            setDisabledBrand('none')
            setChamp('Championship')
            setMapChamp('Map')
            setDisabledButton(true)
            await createDevice(formData).then(data => onHide())
            device.setDeviceRendering(false)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const onHideDisabled = () => {
        setDisabledBrand('none')
        setChamp('Championship')
        setMapChamp('Map')
        setDisabledButton(true)
        onHide()
    }

    const buttonEnable = () => {
        if(selectedType.grandprix === true){
            return false
        } else if(disabledButton === false){
            return false
        } else{
            return true
        }
    }

    return (
        <Modal
            show={show}
            onHide={onHideDisabled}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    ADD GAME
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <div className="head">HEROES HOTA</div>
                        <Dropdown.Toggle>{ champ || "Championship"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(massiveChampStart =>
                                massiveChampStart.start === false ?
                                <Dropdown.Item
                                    onClick={() => typeClick(massiveChampStart, massiveChampStart.grandprix, massiveChampStart.id)}
                                    key={massiveChampStart.id}
                                >
                                    {/*{moment(massiveChampStart.name).format('YYYY-MM-DD HH:mm')}.*/}
                                    {massiveChampStart.nametype}. {massiveChampStart.grandprix === false ? '' : ' Grand Prix. '}Registration: {massiveChampStart.amount} руб.

                                    {/*<div> фонд составляет: {massiveChampStart.fund}</div>*/}
                                </Dropdown.Item>
                                    :
                                    ""
                            )}

                        </Dropdown.Menu>

                        {/*<Dropdown.Menu>*/}
                        {/*    {massiveChampStart.map(massiveChampStart =>*/}
                        {/*        <Dropdown.Item*/}
                        {/*            onClick={() => typeClick(massiveChampStart, massiveChampStart.id)}*/}
                        {/*            key={massiveChampStart.id}*/}
                        {/*        >*/}
                        {/*            {moment(massiveChampStart.name).format('YYYY-MM-DD HH:mm')}.*/}
                        {/*            {"  " +massiveChampStart.nametype}. Регистрация: {massiveChampStart.description}*/}
                        {/*        </Dropdown.Item>*/}
                        {/*    )}*/}
                        {/*</Dropdown.Menu>*/}

                    </Dropdown>
                    { selectedType.grandprix === false?
                        <div style={{display: disabledBrand}}>
                            <Dropdown className="mt-2 mb-2">
                                <Dropdown.Toggle> {mapChamp || "Map"}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {brands.map(brand =>
                                        <Dropdown.Item
                                            onClick={() => mapChampF(brand)}
                                            key={brand.id}
                                        >
                                            {brand.name}
                                            {/*<div className="font-s"> Фонд: {brand.name} составляет: {brand.amount} руб.</div>*/}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        :
                        ''
                        // mapChampF(brands)
                    }
                    {selectedType.amount !== 0 ?
                        <div style={{display: disabledBrand}} className="mt-4 font-s">
                            <div>Взнос для игры: {selectedType.amount} руб.</div>
                            {/*<div>Любой пользователь может оплатить вам игру, целеком или частями.</div>*/}

                        </div>
                        :
                        "Взнос составляет 0 руб."
                    }

                    <div>
                         {/*<a style={{fontSize: 24}} href="https://www.donationalerts.com/r/cyberbet" target="_blank">donationalerts.com</a>*/}
                    </div>
                </Form>
            </Modal.Body>


            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button disabled={buttonEnable()} variant="outline-success" onClick={addDevice}>Регистрация</Button>
            </Modal.Footer>
        </Modal>

    );
});

export default CreateDevice;
