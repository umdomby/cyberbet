import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import CreateQiwiTypesDonate from "./CreateQiwiTypesDonate";
import CreateQiwi from "./modals/CreateQiwi";

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    //const [qiwiVisible, setQiwiVisible] = useState(false)
    return (
        <div>
            <div className="d-flex justify-content-center" style={{minWidth: '400px'}}>
                <CreateQiwiTypesDonate donatetype={'fund "win map"'} transaction={1}/>
                {device.selectedType.grandprix === true ?
                    <CreateQiwiTypesDonate donatetype={'all users to game, "win champ"'} transaction={10}/>
                    :
                    <CreateQiwiTypesDonate donatetype={'all users to game, "win map"'} transaction={8}/>
                }
                {device.selectedType.grandprix === true ?
                    <CreateQiwiTypesDonate donatetype={'"win champ"'} transaction={7}/>
                    :
                    ""
                }
            </div>
            <Row style={{minWidth: '600px'}} className="mt-2 d-flex">
                {device.devices.map((device, index) =>
                    <DeviceItem key={index} device={device}/>

                )}
            </Row>
        </div>
    );
});

export default DeviceList;
