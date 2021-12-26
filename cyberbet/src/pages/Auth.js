import React, {useContext, useEffect, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {check, login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {checkUserData} from "../http/userDataAPI";
import ReCAPTCHA from "react-google-recaptcha"
//import './../App.css';

const Auth = observer((props) => {
    const {user, userdata, device} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const [img, setFile] = useState(null)

    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [username, setUsername] = useState('')
    const [rating, setRating] = useState('')
    const [twitch, setTwitch] = useState('')
    const [youtube, setYoutube] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [telegram, setTelegram] = useState('')
    const [vk, setVK] = useState('')
    const [ok, setOK] = useState('')
    const [reCAPTCHA, setReCAPTCHA] = useState(true)

    // const selectFile = e => {
    //     setFile(e.target.files[0])
    // }

    // useEffect(() => {
    //     checkUserData(user.checkUser.id).then(data => userdata.setUserData(data))
    //     check().then(data => user.setUser(data))
    // }, [])

    const onChange = (value) => {
        //console.log("Captcha value:", value)
        setReCAPTCHA(false)
    }

    const click = async () => {
        try {
            let dataSet;
            if (isLogin) {
                localStorage.removeItem('token')
                dataSet = await login(email, password);
            } else {
                const role = "USER"
                var testEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                if (testEmail.test(email)){
                    if(username.length <= 25) {
                         let regexp = /^[A-Za-zА-Яа-я0-9_-]+$/i
                         //let regexp = /^[A-Za-z0-9_-]+$/i
                         if(regexp.test(username)) {
                            dataSet = await registration(email, password, username, rating, twitch, youtube, facebook, instagram, telegram, vk, ok, role, props.promo);
                            await checkUserData(user.checkUser.id).then(data => userdata.setUserData(data))
                         }else{
                             return alert("Login должен состоять из английских букв, разрешены: цифры,знак минус и нижнее подчеркивание")
                         }
                    }else{
                        return alert("Login должен содержать не более 25 символов")
                    }
                }else{
                    return alert("Укажите правильный формат email")
                }
            }
            user.setUser(dataSet)
            user.setIsAuth(true)
            checkUserData(user.checkUser.id).then(data => {
                userdata.setUserData(data)
                device.setDeviceRendering(false)
            })
            history.push(SHOP_ROUTE)

        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            // className="d-flex justify-content-center align-items-center"
            className="d-flex h-100 justify-content-center align-self-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    {isLogin ?
                        <div>
                        <Form.Control
                            className="mt-3"
                            placeholder="Логин"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Пароль"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        />
                        </div>
                    :
                        <div>
                            <Form.Control
                                className="mt-3 block-example border border-primary"
                                placeholder="* Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                            />
                            <Form.Control
                                className="mt-3 block-example border border-primary"
                                placeholder="* Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                            />

                            <Form.Control
                                className="mt-3 block-example border border-primary"
                                placeholder="* Login (Hota)"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />

                            <Form.Control
                                className="mt-3 block-example border border-primary"
                                placeholder="* Ваш рейтинг в Heroes Hota "
                                value={rating}
                                onChange={e => setRating(e.target.value)}
                            />
                            {/*<Form.Control*/}
                            {/*    className="mt-3"*/}
                            {/*    type="file"*/}
                            {/*    onChange={selectFile}*/}
                            {/*/>*/}
                            {/*Ваше фото*/}
                            <Form.Control
                                className="mt-3 block-example border border-primary"
                                placeholder="* Twitch: http://twitch.tv/...."
                                value={twitch}
                                onChange={e => setTwitch(e.target.value)}
                            />
                            <br/>
                            Желательно:
                            <Form.Control
                                className="mt-3 block-example border border-primary"
                                placeholder="YouTube: https://www.youtube.com/channel/...."
                                value={youtube}
                                onChange={e => setYoutube(e.target.value)}
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="https://www.facebook.com/..."
                                value={facebook}
                                onChange={e => setFacebook(e.target.value)}
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="https://www.instagram.com/..."
                                value={instagram}
                                onChange={e => setInstagram(e.target.value)}
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="https://t.me/..."
                                value={telegram}
                                onChange={e => setTelegram(e.target.value)}
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="https://vk.com/..."
                                value={vk}
                                onChange={e => setVK(e.target.value)}
                            />
                            <Form.Control
                                className="mt-3"
                                placeholder="https://ok.ru/..."
                                value={ok}
                                onChange={e => setOK(e.target.value)}
                            />
                        </div>
                    }
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <ReCAPTCHA
                            sitekey="6Ld-qr0bAAAAAEXsi5tKq5g6Ddwg0oG6Aqmo9mmA"
                            onChange={onChange}
                        />
                        <Button
                            disabled={reCAPTCHA}
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>

                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
