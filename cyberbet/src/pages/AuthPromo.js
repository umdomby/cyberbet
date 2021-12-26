import React from 'react';
import {Container, Form} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import Auth from "./Auth";
const AuthPromo = observer(() => {
    const {promo} = useParams()
    return (
        <Container>
            <Auth promo={promo}/>
        </Container>
    );
});
export default AuthPromo;
