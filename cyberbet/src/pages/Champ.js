import React, {useState, useEffect, useContext} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateTableChamp from "../components/modals/CreateTableChamp";
import CreateChampLap from "../components/modals/CreateChampLap";
import CreateChampWin from "../components/modals/CreateChampWin";
import CreateChampLapOne from "../components/modals/CreateChampLapOne";


const Champ = () => {

    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [createChampTable, setCreateChampTable] = useState(false)
    const [createChampLap, setCreateChampLap] = useState(false)
    const [createChampLapOne, setCreateChampLapOne] = useState(false)
    const [createChampWin, setCreateChampWin] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Add types
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Add brands
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateChampTable(true)}
            >
                Создание таблицы рандомов
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateChampLapOne(true)}
            >
                Создание одного круга рандома
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateChampLap(true)}
            >
                Создание всех кругов рандома
            </Button>

            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCreateChampWin(true)}
            >
                Users win
            </Button>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateTableChamp show={createChampTable} onHide={() => setCreateChampTable(false)}/>
            <CreateChampLap show={createChampLap} onHide={() => setCreateChampLap(false)}/>
            <CreateChampLapOne show={createChampLapOne} onHide={() => setCreateChampLapOne(false)}/>
            <CreateChampWin show={createChampWin} onHide={() => setCreateChampWin(false)}/>

        </Container>
    );
};

export default Champ;
