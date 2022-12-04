import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "cq", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>totalamount</span>
        <span>35.54</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}> Close </button>
        <button className={classes.button}>Order Now</button>
        action buttons
        </div>
    </div>
  );
};

export default Cart;
