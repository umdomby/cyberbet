import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import moment from 'moment';
import ru from 'moment/locale/ru';
import {fetchBrands, fetchTypes, fetchTypesBrandIdname} from "../http/deviceAPI";
import {useHistory} from "react-router-dom";
import LeftBar from "./LeftBar";
// import './../App.css';
import {check} from "../http/userAPI";
import {checkUserData} from "../http/userDataAPI";
import Shop from "../pages/Shop";
import {Button} from "react-bootstrap";
import {WS} from "../utils/consts";

const TypeBar = observer((props) => {
    const {device} = useContext(Context)
    const [state, setState] = React.useState({ num: 0 });

    const [deviceVisible, setDeviceVisible] = useState(false)
    const history = useHistory()


    // useEffect(() => {
    //     fetchTypes().then(data => device.setTypes(data))
    //     // const timer = setTimeout(() => setState({ num: state.num + 1 }), 3000);
    //     // return () => clearTimeout(timer);
    // }, [])


    const home = () => {
        device.setSelectedType({})
        device.setSelectedBrand({})
        props.updateData(true)
    }

    const oneOneOne = () =>{
        device.setOneOnOne(true)
    }

    const brandIf = (type, typeid) => {
        props.updateData(false)
        device.setSelectedType(type)
        device.setSelectedBrand({})
        fetchTypesBrandIdname(typeid).then(data => device.setBrands(data))
    }

    const colorTypeStart = (typeStart) => {
        if(typeStart === true){return '#ba932e'}
        if(typeStart === false){return '#22a14a'}
        if(typeStart === null){return '#4547d9'}
    }
    const txtTypeStart = (typeStart, amount) => {
        if(typeStart === true){return 'стартовал, взнос игры составил: ' + amount + "руб."}
        if(typeStart === false){return 'идёт регистрация, взнос игры: ' + amount + "руб."}
        if(typeStart === null){return 'окончен, взнос игры составил: ' + amount + "руб."}
    }

    const txtTypeStartDate = (typeStart) => {
        if(typeStart === true){return 'старт турнира: '}
        if(typeStart === false){return 'старт регистрации: '}
        if(typeStart === null){return 'турнир окончен: '}
    }

    return (
        <div>
            {/*<p>{state.num}</p>*/}
            <LeftBar/>
            <div className="m-3 d-flex h-100 justify-content-center align-self-center">
                <a onClick={home} style={{cursor:'pointer'}} className="mr-3">ГЛАВНАЯ</a>
            </div>
            <ListGroup>
                {device.types.map(type =>
                    <ListGroup.Item
                        key={type.id}
                        style={{cursor: 'pointer', lineHeight: 1.2}}
                        active={type.id === device.selectedType.id}
                        onClick={() =>
                            brandIf(type, type.id)
                        }
                    >
                        <div className="head" style={{color: type.grandprix === true ?  '#d00000' :  'rgb(36,36,36)' }}>{type.description}</div>
                        <div>{type.nametype}</div>
                        <div>{txtTypeStartDate(type.start)}{moment(type.name).locale("ru").format('YYYY-MM-DD HH:mm')}</div>
                        <div>win map all = {type.fund}руб.  {type.grandprix === true ? ", win champ = "  + type.winner/2 + "руб.": ""} </div>
                        <div style={{ color: colorTypeStart(type.start) }}>{txtTypeStart(type.start, type.amount)}</div>

                    </ListGroup.Item>
                )}
            </ListGroup>
            <div className="m-3 d-flex h-100 justify-content-center align-self-center">
                <a href="https://www.twitch.tv/robotavatar" target="_blank">twitch</a>
            </div>
            <LeftBar/>

            <div className="d-flex h-100 justify-content-center align-self-center">
                {/*<Button onClick={oneOneOne}>*/}
                {/*    Lobby*/}
                {/*</Button>*/}
                <Button
                    variant={"outline-secondary"}
                    onClick={() => history.push(WS)}
                    className="mr-1"
                >
                    LOBBY
                </Button>
            </div>
        </div>
    );
});

export default TypeBar;
