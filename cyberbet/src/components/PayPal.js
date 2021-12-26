import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom"
import {observer} from "mobx-react-lite";

import { PayPalButton } from "react-paypal-button-v2";
//const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

const PayPal = observer(() => {

    const [valueBet, setValueBet] = useState('')

    const [saveTransaction, setSaveTransaction] = useState({})

    useEffect(() => {
        setValueBet("1")
    }, [])

    return (
        <PayPalButton
            amount={valueBet}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
                //alert("Transaction completed by " + details.payer.name.given_name);

                //saveTransaction(data.orderID)
                //const a = details.payer.name.given_name
                return data.orderID
                //OPTIONAL: Call your server to save the transaction
                // return fetch("/paypal-transaction-complete", {
                //     method: "post",
                //     body: JSON.stringify({
                //         orderId: data.orderID
                //     })
                // });
            }}
            options={{
                clientId: "AYheu3PzB8ojAuOFvxuFyheRF4mEFq1lr4A7_NyNisM3wwvu63W5T-2egLzLFoP-IrUI7zAVf2mkYkrS"
            }}
        />

    );

})
export default PayPal;

//
// import React from 'react';
// import ReactDOM from "react-dom"
// import {observer} from "mobx-react-lite";
//
// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
//
// const PayPal = observer(() => {
//
//     const createOrder = (data, actions) =>{
//         return actions.order.create({
//             purchase_units: [
//                 {
//                     amount: {
//                         value: "0.01",
//                     },
//                 },
//             ],
//         });
//     };
//
//     const onApprove = (data, actions) => {
//         return actions.order.capture();
//     };
//     return (
//         <PayPalButton
//             createOrder={(data, actions) => createOrder(data, actions)}
//             onApprove={(data, actions) => onApprove(data, actions)}
//         />
//     );
//
// })
//
// export default PayPal;
