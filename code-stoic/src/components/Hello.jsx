// https://www.squash.io/passing-parameters-to-components-in-reactjs-with-typescript/#:~:text=Yes%2C%20you%20can%20pass%20multiple,and%20appearance%20of%20the%20component.

import PropsDestructureArray from "./PropsDestructureArray";
import PropsObject from "./PropsObject";

function Hello(props) {    
    // We can get the values directly by using 
    // `function Hello({name, message})`
    // We can send the properties as a object and seperate values. All together forms a prop
    

    console.log("inside hello ");
    console.log(props);

// Conditional operation
    // if(props.propsCondition == "true") {
    //     return (<PropsDestructureArray props={props}/>);
    // } 
    // else {
    //     return (<PropsObject person={props.peroson}/>)
    // }

// Ternary operation
    return (props.propsCondition == "true") ? <PropsDestructureArray props={props}/> : <PropsObject person={props.peroson}/>
}

export default Hello