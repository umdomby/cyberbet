import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Button} from "react-bootstrap";
import TablePoint from "./modals/TablePoint";
import {checkUserData} from "../http/userDataAPI";
import {Context} from "../index";


const TablePointM = observer(() => {

    const [qiwiVisible, setQiwiVisible] = useState(false)


    return (
        <div>
            <li className="mb-2 mt-2 list-unstyled d-flex h-100 justify-content-center align-self-center">
                <Button
                    variant={"warning"}
                    onClick={() => setQiwiVisible(true)}
                    className="mr-1"
                >
                    table pc
                </Button>
            </li>
            <TablePoint show={qiwiVisible} onHide={() => setQiwiVisible(false)}/>
        </div>

    );

})

export default TablePointM
