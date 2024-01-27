import Modal from '../UI/Modal';
import classes from './Cart.module.css'; // Import the CSS file
const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{ [
        {
            id: 'c1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99,
            amount: 2,
        }
    ].map((item) => <li>{item.name}</li>)}</ul>;

    return(
        <Modal onClose = {props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>
                Total Amount
                </span>
                <span> 35.62</span>
            </div>
            <div className={classes.action}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>

        </Modal>
    )
};
export default Cart;