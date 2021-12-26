import React, {Component, useEffect, useState} from "react";
import moment from "moment";

const TestComponent = (props) =>{

    //const [masss, setMasss] = useState(props.name.join())

    const mass = () => {
        const dataMassive = (props.name.join(";"))
        const massive = dataMassive.split(";")
        const massiveMoment = []
        for(let i = 0;  i < massive.length; i++){
            massiveMoment.push(moment(massive[i]).format('YYYY-MM-DD HH:mm'))
        }
        return massiveMoment
        //return moment(massive).format('YYYY-MM-DD HH:mm')
    }

    //const [masss, setMasss] = useState([])

    // useEffect(() => {
    //     setMasss(mass())
    // }, [])

    // var list = [];
    // for(var i=0; i < device.dateMatch.length; i++){
    //     list.push(<li>{device.dateMatch[i]}</li>)
    // }

    return (
        <div className="small">
            {/*{device.dateMatch}*/}
            {/*<div className="mr-2">{moment(device.dateMatch).format('YYYY-MM-DD HH:mm')}</div>*/}

            {/*<ul>{list[0]}</ul>*/}
            {/*{props.name[0]}*/}
            {/*AComponent, {props.name.join()}*/}

            AComponent, {mass()}

            {/*{props.name.map(function(d, index){*/}
            {/*    return (<li key={index}>{d.name}</li>)*/}
            {/*})}*/}

        </div>
    )
}
export default TestComponent



// export default function TestComponent(props){
//     return(
//         <div className="small">
//            FComponent, {props.name.join(',')}
//         </div>
//     )
// }



// export default class TestComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             visibility: false,
//             count: 0
//             //name: "AlexII  "
//         };
//         this.handleClick = this.handleClick.bind(this);
//         this.handleClick1 = this.handleClick1.bind(this);
//         this.handleClick2 = this.handleClick2.bind(this);
//         this.handleClick3 = this.handleClick3.bind(this);
//     }
//     handleClick(){
//         this.setState(state =>({
//             visibility: !state.visibility
//         }));
//     }
//     handleClick1(){
//         this.setState(state => ({
//             count: state.count + 1
//         }))
//     }
//     handleClick2(){
//         this.setState(state => ({
//             count: state.count - 1
//         }))
//     }
//     handleClick3(){
//         this.setState({
//             count: 0
//         })
//     }
//
//     render() {
//         if(this.state.visibility){
//         //const name = this.state.name
//             return (
//                 <div className="small">
//                     {/*CComponent, {this.props.name.join(',')}*/}
//                     {/*CComponent, {this.props.name}*/}
//                     {/*CComponent, {name}*/}
//                     <button className="mr-1" onClick={this.handleClick}>Click</button>
//                     CComponent, {this.state.name}
//                     <button className="mr-1" onClick={this.handleClick1}>+</button>
//                     <button className="mr-1" onClick={this.handleClick2}>-</button>
//                     <button className="mr-1" onClick={this.handleClick3}>reset</button>
//                     <h5>Current: {this.state.count}</h5>
//                 </div>
//             );
//         }else {
//             return (
//                 <div className="small">
//                     <button className="mr-1" onClick={this.handleClick}>Click</button>
//                 </div>
//             )
//         }
//
//     }
// }
//TestComponent.defaultProps = {name: "Allllll"}






