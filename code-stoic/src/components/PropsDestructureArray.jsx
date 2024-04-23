export default function PropsDestructureArray(props) {
    // destructuring the object
    const {name , message, emoji} = props.props;

    console.log("inside props");
    console.log(props);
    return (
        <>
            <h1> Props, destructuring and arrays </h1>
            <h2>Keys are inserted in fruits list component and iterated to print different fruits</h2>
            <h2> Welcome {props.props.name} {emoji}, {props.props.message}. Using props</h2>
            <h2> Welcome {name}, {message}. Destructuring props</h2>
            <h2> Take your seat, {props.props.seatNo} </h2>
            <div>----------------------------------------------</div>
        </>
    );
}