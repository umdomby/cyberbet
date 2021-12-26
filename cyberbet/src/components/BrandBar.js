import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Card, Row} from "react-bootstrap";
// import './../App.css'
const BrandBar = observer(() => {
    const {device} = useContext(Context)

    const addBrandAll = () => {
        device.setSelectedBrand(device.brands)
    }

    const idBrandBarIfidname = () => {
        return true
        // if(device.brands.idname === device.types.id){
        //     return true
        // }else{
        //     return false
        // }
    }



    return (
        <Row className="d-flex" >

             {/*{(() => {*/}
             {/*    if (idBrandBarIfidname)  {*/}
             {/*        return (*/}
             {/*            device.brands.map(brand =>*/}
             {/*                <Card variant={"outline-success"}*/}
             {/*                      style={{cursor:'pointer'}}*/}
             {/*                      key={brand.id}*/}
             {/*                      className="p-3"*/}
             {/*                      onClick={() => device.setSelectedBrand(brand)}*/}
             {/*                      border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}*/}
             {/*                >*/}
             {/*                    {brand.name}*/}
             {/*                </Card>*/}
             {/*            )*/}
             {/*        )}*/}
             {/*})()}*/}

            {device.brands.map(brand =>

                <Card variant={"outline-success"}
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    <div style={{maxWidth: '100px', minWidth: '120px'}}>{brand.name}</div>
                    <div style={{fontSize:'10px', maxWidth: '100px', minWidth: '120px'}}>{brand.brand_description}</div>
                    <div className="font-s">donate: {brand.amount}руб.</div>
                    <div className="font-s">game: {brand.brand_payment}руб.</div>
                    <div className="font-s">win map: {brand.amount+brand.brand_payment !== 0 ? (brand.amount + brand.brand_payment) : 0 }руб.</div>
                </Card>
            )}

            <Button className="ml-1" variant={"outline-success"} onClick={addBrandAll}>All</Button>
        </Row>
    );
});

export default BrandBar;
