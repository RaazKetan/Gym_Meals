import {Fragment} from "react";
import mealsImage from "../../assets/meal.jpg";
import classes from "./Header.module.css";
const Header = (props)=>{

    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Gym Meals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src = {mealsImage} alt="A gym meal place"/>
            </div>
        </Fragment>
    )
};
export default Header;