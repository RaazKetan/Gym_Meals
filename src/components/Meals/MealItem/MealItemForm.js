import {useRef, useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealtItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setamountIsValid] = useState(true);

  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value; 
    //current is a property of useRef
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length ===0 || enteredAmountNumber <1 || enteredAmountNumber >5){
        setamountIsValid(false);
        return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
            ref = {amountInputRef}
             label="Amount" 
             input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step:'1',
                defaultValue: '1'
            }}/>
            <button type='submit'>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount from (1-5)</p>}
        </form>
    )
}
export default MealtItemForm;