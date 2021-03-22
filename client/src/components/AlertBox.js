function AlertBox(props){
    return(
    <div className={`row alertbox ${props.type}`}>
    {
        props.messages.map(e => {
            return (<li>{e}</li>)
        })
    }
    </div>
    )
}
export default AlertBox