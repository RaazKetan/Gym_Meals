import classes from "./Checkout.module.css";

const Checkout = (props) => {
    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = event.target[0].value;
        const enteredStreet = event.target[1].value;
        const enteredPostal = event.target[2].value;
        const enteredCity = event.target[3].value;
        const userData = {
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity,
        };
    }
    return <form>
        <div className={classes.control}>
            <label htmlFor="name" >Your Name</label>
            <input type="text" id="name"></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="street" >Street</label>
            <input type="text" id="street"></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="postal" >Postal Code</label>
            <input type="text" id="postal"></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="city" >City</label>
            <input type="text" id="city"></input>
        </div>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button>Confirm</button>
    </form>
}
export default Checkout;