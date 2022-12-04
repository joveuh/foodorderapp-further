import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "cq", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>$35.54</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}> Close </button>
        <button className={classes.button}>Order Now</button>
        </div>
    </Modal>
  );
};

export default Cart;