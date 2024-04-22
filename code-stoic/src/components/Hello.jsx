// https://www.squash.io/passing-parameters-to-components-in-reactjs-with-typescript/#:~:text=Yes%2C%20you%20can%20pass%20multiple,and%20appearance%20of%20the%20component.

function Hello(props, {peroson}) {
    
    console.log(props);
    console.log(peroson);
    // destructuring the object

    const {name , message, emoji} = props;
    // We can get the values directly by using 
    // `function Hello({name, message})`

    if(props !== undefined) {
        return (<div>
        
            <h1> Props, destructuring and arrays </h1>
            <h2> Welcome {props.name} {emoji}, {props.message}. Using props</h2>
            <h2> Welcome {name}, {message}. Destructuring props</h2>
            <h2> Take your seat, {props.seatNo} </h2>
            <div>----------------------------------------------</div>
            </div>)
    } 
    if(peroson !== undefined) {
        return (
            <div>
                <h1> Ha, this is a {peroson.typess}</h1>
                <h2> Welcome {peroson.name} {peroson.emoji}, {peroson.message} {peroson.seatNo} </h2>
                <div>----------------------------------------------</div>
            </div>)
    }    
}

export default Hello