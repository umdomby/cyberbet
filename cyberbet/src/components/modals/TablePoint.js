import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button, Spinner} from "react-bootstrap";
import {createType} from "../../http/deviceAPI";
import {Context} from "../../index";
import {checkRating, checkUserData} from "../../http/userDataAPI";

const TablePoint = ({show, onHide}) => {

    const {userdata, device} = useContext(Context)
    const [rating, setRating] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        checkRating(device.selectedType.nametype).then(data => setRating(data)).finally(() => setLoading(false))
    }, [device.selectedType])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {device.selectedType.nametype}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {rating.rows.map((rating, index) =>
                    <div className="row p-1 ml-3" key={index} style={{maxWidth: '100%'}}>
                        <div className="col-sm-0 mr-1" style={{fontSize: 15, color: '#131728'}}>
                            {index+1})
                        </div>
                        <div className="col-sm-0 mr-1" style={{fontSize: 15, color: '#131728'}}>
                            {rating.rating_username}:
                        </div>
                        <div className="col-sm-0 mr-1" style={{fontSize: 15, color: '#131728'}}>
                            {rating.sum}pc
                        </div>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
};

export default TablePoint;
