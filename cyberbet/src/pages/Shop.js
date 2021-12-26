import React, {useContext, useEffect, useRef, useState} from 'react';
import {Container, Spinner} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import DeviceListStart from "../components/DeviceListStart";
import Footer from "../components/Footer";
import DeviceListStartWin from "../components/DeviceListStartWin";
import UseReff from "../components/lern/UseReff";
import {checkUserData} from "../http/userDataAPI";
import Home from "../components/Home";


const Shop = observer(() => {
    const {device, userdata, user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [callbackTypeBar, setCallbackTypeBar] = useState(false)
    // const [state, setState] = useState({ num: 0 });
    //const [oneOnOne, setOneOnOne] = useState(false);



    useEffect(() => {
        //const a = device.selectedType.id
        if(device.selectedType.id !== undefined) {
            if(callbackTypeBar === false) {
                fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 2).then(data => {
                    device.setDevices(data.devices.rows)
                    device.setTableName(data.tableName)
                    device.setBaseCreatedWin(data.baseCreatedWin)
                    device.setTotalCount(data.count)
                })
            }
        }
        device.setDeviceRendering(true)
        // device.setOneOnOne(false)
        // return () => clearTimeout(timer);
    }, [device.page, device.selectedType, device.selectedBrand, device.deviceRendering])

    useEffect(() => {
        checkUserData(user.checkUser.id).then(data => userdata.setUserData(data)).finally(() => setLoading(false))
    }, [device.deviceRendering])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    // const renderer = ({ years, months, days, hours, minutes, seconds, completed }) => {
    //     if (completed) {
    //         return <DeviceListStart/>
    //     }
    //     else {
    //         return <div>
    //             <span>
    //                 До старта: {years}{months} {days} день {hours} час {minutes} минут {seconds} секунд
    //             </span>
    //             {/*<DeviceList/>*/}
    //         </div>;
    //     }
    // };

    const updateData = (value) => {
        setCallbackTypeBar(value)
    }

    const isEmptyObject = (obj) => {
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                return false;
            }
        }
        return true;
    }

    return (
        <Container style={{maxWidth: '100%'}}>
            {/*{device.oneOnOne*/}
                {/*<BrowserRouter>*/}
                {/*    <Switch>*/}
                {/*        <Route path='/ws/:id'>*/}
                {/*            <OneOnOne/>*/}
                {/*        </Route>*/}
                {/*        <Redirect to={`ws/lobby`}/>*/}

                {/*        /!*<Route path='/ws/:id'>*!/*/}
                {/*        /!*    <OneOnOne/>*!/*/}
                {/*        /!*</Route>*!/*/}
                {/*        /!*<Redirect to={`ws/f${(+new Date).toString(16)}`}/>*!/*/}
                {/*    </Switch>*/}
                {/*</BrowserRouter>*/}
            {/*    :*/}
                <Row className="sm-0">
                    <Col style={{maxWidth: '20%', minWidth: '300px'}}>
                        <TypeBar updateData={updateData}/>
                        {/*<PayPal/>*/}
                    </Col>
                    <Col style={{maxWidth: '80%', minWidth: '300px'}}>
                        {isEmptyObject(device.selectedType) ? "" : <BrandBar/>}
                        {callbackTypeBar === false ?
                            device.tableName
                                ?
                                <div style={{maxWidth: '100%'}}>
                                    <DeviceListStart/>
                                    {device.baseCreatedWin === true ?
                                        <DeviceListStartWin load={device.baseCreatedWin}/> : ""}
                                </div>
                                :
                                <div style={{maxWidth: '100%'}}>
                                    {isEmptyObject(device.selectedType) ? "" : <DeviceList/>}
                                </div>
                            :
                            ""
                        }
                        {!device.selectedType.id && !device.selectedBrand.id ? <Home/> : ''}
                    </Col>
                </Row>
            {/*}*/}
            <Footer/>
        </Container>
    );
});

export default Shop;
