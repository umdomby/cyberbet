import React, {useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import LeftBar from "./LeftBar";
import YouTube from 'react-youtube';

const Home = observer(() => {

    const opts = {
        // height: '100%',
        // width: '640',
        // height: '700px',
        width: '80%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }
    function onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    return (
        // <Container className="d-flex h-100 justify-content-center align-self-center">
        <div style={{ paddingTop:"10px"}}>
            <div style={{color:'red'}}>АКЦИЯ - при регистрации на cyberbet.online бонус +150руб.</div>
            Cyberbet - организация турниров.
            <br/>
            <a href='https://h3hota.com/ru/download' target="_blank">Cкачать Heroes HOTA</a>
            <br/>
            В данный момент идёт регистрация:
            <br/>
            <div style={{color:'#000000'}}>
            1. СНГ_2021. Гран-при (GP). Онлайн чемпионат СНГ 2021. Взнос 150руб.
            <br/>
            2. JCJO. Jebus Cross и Jebus Outcast. Взнос 100руб.
            <br/>
            3. JCJO_FREE. Jebus Cross и Jebus Outcast. Взнос 0руб.
            <br/>
            <div className="ml-3" style={{color:'#256c02'}}>Любой посетитель сайта может оплатить ваш взнос $</div>
            </div>

            <a href='../registration'> Регистрация в cyberbet</a>
            <div className="video">
                <YouTube className="mt-3 video_iframe" videoId="uueYOHS95p0" opts={opts} onReady={onReady} />
            </div>
            Занявшие первые места (5-10% от зарегистрированных пользователей в турнире, в процентном соотношении 50% 25% 15% 10%) выигрывают денежные средства: 100% от взносов и 50% от пожертвований.
            Приятной игры!


            {/*<Row>*/}
            {/*    <Col style={{maxWidth: '50%'}} >*/}
            {/*            33333*/}
            {/*    </Col>*/}
            {/*    <Col style={{maxWidth: '50%'}}>*/}
            {/*            222222*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </div>
    );
})

export default Home;
