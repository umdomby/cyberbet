import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import CreateQiwi from "./modals/CreateQiwi";
import {Button, Dropdown} from "react-bootstrap";
import {Context} from "../index";
import {fetchTypesBrandIdname} from "../http/deviceAPI";


const CreateQiwiTypesDonate = observer(({donatetype, transaction}) => {
    const {device} = useContext(Context)
    const [qiwiVisible, setQiwiVisible] = useState(false)

    // useEffect(() => {
    //
    //     if(transaction === 8) {
    //         setBrandName(device.brands[0].name)
    //         setBrandid(device.brands[0].id)
    //     }
    //
    // }, [device.selectedType])


    return (
        <div>
            <li className="mb-2 mt-2 list-unstyled d-flex h-100 justify-content-center align-self-center">
                <Button
                    variant={"warning"}
                    onClick={() => setQiwiVisible(true)}
                    className="mr-1"
                >
                    donate {donatetype} {device.selectedType.nametype}

                </Button>
            </li>
            <CreateQiwi show={qiwiVisible} onHide={() => setQiwiVisible(false)} nametype={device.selectedType.nametype} typeid={device.selectedType.id} code_transaction={transaction}/>
        </div>

    );

})

export default CreateQiwiTypesDonate
