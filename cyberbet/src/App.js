import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import {fetchBrands, fetchTypes} from "./http/deviceAPI";
import {checkUserData} from "./http/userDataAPI";
import './App.css';

import PayPal from "./components/PayPal";
import Qiwi from "./pages/Qiwi";


const App = observer(() => {
    const {user, device, userdata} = useContext(Context)
    const [loading, setLoading] = useState(true)
    const [loading1, setLoading1] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [loading3, setLoading3] = useState(true)
    const [loading4, setLoading4] = useState(true)

    useEffect(() => {
        try{
            check().then(data => {
                user.setUser(data)
                user.setIsAuth(true)
            }).finally(() => setLoading1(false))
            checkUserData(user.checkUser.id).then(data => userdata.setUserData(data)).finally(() => setLoading2(false))
        }catch (e) {
            console.log(e+" вы не авторезированы")
        }
        fetchBrands().then(data => device.setBrands(data)).finally(() => setLoading3(false))
        fetchTypes().then(data => device.setTypes(data)).finally(() => setLoading4(false))
        //checkUserData(user.checkUser.id).then(data => userdata.setUserData(data)).finally(() => setLoading(false))
    }, [])

    if (loading1 && loading2 && loading3 && loading4) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />


                {/*<Switch>*/}
                {/*    <Route path='/ws/:id'>*/}
                {/*        <OneOnOne/>*/}
                {/*    </Route>*/}
                {/*    <Redirect to={`ws/f${(+new Date).toString(16)}`}/>*/}
                {/*</Switch>*/}


            {/*<Footer/>*/}
            {/*<PayPal/>*/}
            {/*<Qiwi/>*/}
        </BrowserRouter>
    );
});

export default App;
