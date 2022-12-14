import { Fragment } from "react";
import AddToCartForm from "./AddToCartForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <Fragment>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <AddToCartForm id={props.id}/>
        </div>
      </li>
    </Fragment>
  );
};

export default MealItem;
