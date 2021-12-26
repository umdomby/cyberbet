import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Card from "react-bootstrap/Card";
import {DEVICE_ROUTE, QIWI_ROUTE} from "../utils/consts";
import {VS_ROUTE} from "../utils/consts";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import {useHistory} from "react-router-dom";
import {
    fetchDevices,
    oppCheck,
    oppCheckTwitch,
    postDataTimeGame,
    userCheck,
    userCheckTwitch
} from "../http/deviceAPI";
import {Button, Container, Row, Spinner} from "react-bootstrap";
import moment from "moment";
// import './../App.css';
import CreateQiwiTypesDonate from "./CreateQiwiTypesDonate";
import TablePointM from "./TablePointM";



const DeviceListStart = observer(() => {
    const [loading, setLoading] = useState(true)
    const {user, device} = useContext(Context)
    const history = useHistory()
    const [state, setState] = useState({ num: 0 });
    // const [qiwiVisible, setQiwiVisible] = useState(false)

    const [datePicker, setDatePicker] = useState(new Date());

    const [dataTimeUserId, setDateTimeUserId] = useState(0)
    const [colorBtnUser, setColorBtnUser] = useState({})
    const [colorBtnOpp, setColorBtnOpp] = useState({})
    const [deviceData, setDeviceData] = useState([])
    const [dataStart, setDataStart] = useState({})
    const [sortAZ, setSortAZ] = useState(true)

    const [userId, setUserId] = useState(0)
    const [checkButton, setCheckButton] = useState(false)

    const [typesName, setTypesName] = useState(0)
    const [brandName, setBrandName] = useState(0)
    const [lap, setLap] = useState(0)

    const [rendering, setRendering] = useState([])

    useEffect(() => {
        //setTimeout(() => {
            fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
                device.setDevices(data.devices.rows)
                device.setTableName(data.tableName)
                device.setTotalCount(data.count)
                const a = 0
            }).finally(() => setLoading(false))
        //},1000);
        // const timer = setTimeout(() => setState({ num: state.num + 1 }), 2000);
        // return () => clearTimeout(timer);
    }, [colorBtnUser, colorBtnOpp, datePicker, dataStart, rendering])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    const addCheckUser = async (userId, checkUserButton, typeId, brandId, lap) => {
        // setUserId(userId)
        // setCheckButton(checkUserButton)
        // setTypesName(typeId)
        // setBrandName(brandId)
        // setLap(lap)
        await userCheck(userId, checkUserButton, typeId, brandId, lap).then(data => setColorBtnUser(data))
        //then(data => setColorBtnUser(data));
    }
    const addCheckOpp = async (userId, checkUserButton, typeId, brandId, lap) => {
        // setUserId(userId)
        // setCheckButton(checkUserButton)
        // setTypesName(typeId)
        // setBrandName(brandId)
        // setLap(lap)
        await oppCheck(userId, checkUserButton, typeId, brandId, lap).then(data => setColorBtnOpp(data));
    }
    const addTwitchUser = async (userId, checkUserButton, typeId, brandId, lap) => {
        setRendering([])
        await userCheckTwitch(userId, checkUserButton, typeId, brandId, lap).then(data =>setRendering(data));
    }
    const addTwitchOpp = async (userId, checkUserButton, typeId, brandId, lap) => {
        setRendering([])
       await oppCheckTwitch(userId, checkUserButton, typeId, brandId, lap).then(data => setRendering(data));
    }

    const rendererUserTwitch = (userId) => {
        if (user.checkUser.id === userId) {
            return false
        } else {
            return true
        }
    };

    const rendererOppTwitch = (oppId) => {
        if (user.checkUser.id === oppId) {
            return false
        } else {
            return true
        }
    };

    const rendererUser = (userId, oppId, oppCheck, userCheck) => {
        if (user.checkUser.id === userId && oppCheck === false && userCheck === false) {
            return false
        } else {
            return true
        }
    };

    const rendererOpp = (userId, oppId, userCheck, oppCheck) => {
        if (user.checkUser.id === oppId && userCheck === false && oppCheck === false) {
            return false
        } else {
            return true
        }
    };

    const dateStartRender = (a, b) => {
        if (user.checkUser.id === a || user.checkUser.id === b) {
            return false
        }
        else {
            return true
        }
    };

    const dateTimeGame = async () => {
        if(typesName !== 0) {
            try{
                await postDataTimeGame(typesName, brandName, dataTimeUserId, datePicker, lap).then(data => setDataStart(data));
                    alert("Дата изменена на: " + datePicker)}
            catch (e) {
                alert(e.response.data.message)
            }
        }
    }

    const colorLap = (a) => {
        if (a === 1) {return '#E3E3E3'}
        else if (a === 2) {return '#FFF9C4'}
        else if (a === 3) {return '#B3E5FC'}
        else if (a === 4) {return '#FFCDD2'}
        else if (a === 5) {return '#DCEDC8'}
        else if (a === 6) {return '#c4d1ff'}
        else if (a === 7) {return '#f4c4ff'}
        else if (a === 8) {return '#fdffc4'}
        else if (a === 9) {return '#c4ffe7'}
        else if (a === 10) {return '#ffc4d7'}
        else{return '#ffdec4'}
    };

    return (
            <div style={{maxWidth: '100%', minWidth: '600px'}} >
                <div className="d-flex justify-content-center">
                    {device.selectedType.start !== null ? <CreateQiwiTypesDonate donatetype={'map'} transaction={1}/> : ""}
                    {device.selectedType.start !== null ? <CreateQiwiTypesDonate donatetype={'winner'} transaction={7}/> : ""}
                    {device.selectedType.start !== null && device.selectedType.grandprix === true ? <TablePointM/> : ""}
                </div>

            <div className="mt-2">MSK. Формат времени: {moment().format('YYYY-MM-DD HH:mm')}  (Один этап длится: 1-3 дня)</div>
            {   //deviceData.rows.map((item) => ({ ...item }))
                // .sort((a, b) => a.lap > b.lap ? 1 : -1)
                //device.devices.map((device, index) =>

                device.devices.map((device, index) =>
                <div key={index} className="container" style={{maxWidth: '100%'}}>
                    <div className="row p-1 mb-1" style={{background: colorLap(device.lap) }} key={device.id} device={device}>
                        <div className="col-sm-0 mr-1 " style={{maxWidth: '22px', minWidth: '22px',fontSize: 15, color: '#131728' }}>
                            {device.lap}
                        </div>
                        <div className="col-sm-0 mr-1 " style={{maxWidth: '22px', minWidth: '22px',fontSize: 15, color: '#ff0000' }}>
                            {device.lapPoint}
                        </div>
                        <div>
                            <input style={{maxWidth: '135px', minWidth: '135px'}}
                                type="text"
                                disabled={dateStartRender(device.userId, device.oppUserId)}
                                defaultValue={device.dateMatch === null
                                    ?
                                    ''
                                    :
                                    moment(device.dateMatch).format('YYYY-MM-DD HH:mm')
                                }
                                //placeholder={moment(device.dateGame).format('YYYY-MM-DD HH:mm')}
                                onChange={(event) => setDatePicker(event.target.value)}
                                onClick={()=> {
                                    setDateTimeUserId(user.checkUser.id)
                                    setTypesName(device.typeId)
                                    setBrandName(device.brandId)
                                    setLap(device.lap)
                                }}
                                onInput={() => {
                                    setDateTimeUserId(user.checkUser.id)
                                    setTypesName(device.typeId)
                                    setBrandName(device.brandId)
                                    setLap(device.lap)
                                }}
                                onKeyPress={event => {
                                    if (event.key === "Enter") {
                                        // alert.show("Дата изменена")
                                        return dateTimeGame()
                                    }
                                }}
                            >
                            </input>
                        </div>
                        <div className="ml-2" style={{maxWidth: '100px', minWidth: '100px'}}>{device.name}</div>
                        <div className="col-sm-1.1">
                            <Button
                                    style={{ background: device.userCheck ? 'red' : 'green', minWidth: '70px', maxWidth: '70px'}}
                                    disabled={rendererUser(device.userId, device.oppUserId, device.oppCheck, device.userCheck) }
                                    onClick={()=>{addCheckUser(device.userId, true, device.typeId, device.brandId, device.lap).then()}}
                            >
                                    {
                                        device.userCheck ? 'loss' : (device.oppCheck ? 'victory' : 'wait')
                                    }
                            </Button>
                        </div>
                        <Button
                            className="ml-1"
                            style={{ background: device.userTwitch ? 'red' : 'green', minWidth: '50px', maxWidth: '50px'}}
                            disabled={rendererUserTwitch(device.userId)}
                            onClick={()=>{addTwitchUser(device.userId, !device.userTwitch, device.typeId, device.brandId, device.lap).then()}}
                        >
                            <Image width={25} height={25}  src={process.env.REACT_APP_API_URL + 'icon/tv.svg'}/>
                        </Button>
                        <a href={device.tvUser} target="_blank">
                            <Image className="ml-1 mt-1" width={25} height={25} src={process.env.REACT_APP_API_URL + 'icon/twitch.svg'}/>
                        </a>
                        <div style={{minWidth: '33px'}}>
                            {device.linku !== null && device.linku !== '' ?
                                <a  href={device.linku} target="_blank">
                                    <Image className="ml-1 mt-1" width={25} height={25} src={process.env.REACT_APP_API_URL + 'icon/video.svg'}/>
                                </a>:''
                            }
                        </div>

                        <div className="col-sm" style={{minWidth: '150px'}}>
                            <Card border={"light"}>
                                <div style={{cursor: 'pointer', lineHeight: 1}}  className="text-black-20 d-flex justify-content-center"
                                     onClick={() => history.push(DEVICE_ROUTE + '/' + device.userdatumId)} >{device.username}</div>

                                <div style={{lineHeight: 1}} className="text-black-20 d-flex justify-content-center">
                                    <Image width={14} height={14} src={star}/>
                                    <div>{device.lapPoint}</div>
                                    <Image width={14} height={14} src={star}/>
                                    {/*<div>{device.rating}</div>*/}
                                    {/*<Image width={14} height={14} src={star}/>*/}
                                </div>
                            </Card>
                        </div>
                        <div className="text-primary" style={{cursor: 'pointer'}}  onClick={() => history.push(VS_ROUTE + '/' + device.typeId + '/' + device.vsid)} >VS</div>
                        <div className="col-sm" style={{minWidth: '150px'}}>
                            <Card border={"light"}>
                                    <div style={{cursor: 'pointer', lineHeight: 1}}  className="text-black-20 d-flex justify-content-center"
                                         onClick={() => history.push(DEVICE_ROUTE + '/' + device.userdatumIdOpp)} >{device.oppUsername}</div>
                                    <div style={{lineHeight: 1}} className="text-black-20 d-flex justify-content-center">
                                        <Image width={14} height={14} src={star}/>
                                        <div>{device.lapPoint}</div>
                                        <Image width={14} height={14} src={star}/>
                                        {/*<div>{device.oppRating}</div>*/}
                                        {/*<Image width={14} height={14} src={star}/>*/}
                                    </div>
                            </Card>
                        </div>
                        {/*<a href={device.linko} target="_blank">*/}
                        {/*    <Image className="mr-2 mt-1" width={25} height={25} src={process.env.REACT_APP_API_URL + 'icon/video.svg'}/>*/}
                        {/*</a>*/}

                        <div style={{minWidth: '33px'}}>
                            {device.linko !== null && device.linko !== '' ?
                                <a  href={device.linko} target="_blank">
                                    <Image className="mr-1 mt-1" width={25} height={25} src={process.env.REACT_APP_API_URL + 'icon/video.svg'}/>
                                </a>:''
                            }
                        </div>

                        <a href={device.tvOpp} target="_blank">
                            <Image className="mr-1 mt-1" width={25} height={25} src={process.env.REACT_APP_API_URL + 'icon/twitch.svg'}/>
                        </a>
                        <Button
                            className="mr-1"
                            style={{ background: device.oppTwitch ? 'red' : 'green', minWidth: '50px', maxWidth: '50px' }}
                            disabled={rendererOppTwitch(device.oppUserId)}
                            onClick={()=>{addTwitchOpp(device.oppUserId, !device.oppTwitch, device.typeId, device.brandId, device.lap).then()}}
                        >
                            <Image width={25} height={25} src={process.env.REACT_APP_API_URL + 'icon/tv.svg'}/>
                        </Button>
                        <div className="col-sm-1.1">
                            <Button
                                style={{ background: device.oppCheck ? 'red' : 'green', minWidth: '70px', maxWidth: '70px' }}
                                disabled={rendererOpp(device.oppUserId, device.oppUserId, device.userCheck, device.oppCheck)}
                                onClick={()=>{addCheckOpp(device.oppUserId, true, device.typeId, device.brandId, device.lap).then()}}
                            >
                                {
                                    device.oppCheck ? 'loss' : (device.userCheck ? 'victory' : 'wait')
                                }
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});

export default DeviceListStart;
