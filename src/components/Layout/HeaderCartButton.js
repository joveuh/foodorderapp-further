import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../store/CartContext";
// we dont import the provider component but really the context itself ... umm alright .. lets continue

const HeaderCartButton = (props) => {
  // This CartContext is managed by the ** closest provider ** which is the CartProvider used in the App Component

  const cartCtx = useContext(CartContext);

  //  Now by using use context here,  the header cart button component will be a re evaluated  by react whenever the context changes.
  //  And it changes whenever we do update it in the Cart Provider Component.

  //  Let's suppose in the cart we have 3 sushi and 1 coke, then if we use just cartCtx.items.length then we get back the number : 4 which is not what we want...
  //  we want to be returned the number 2, representing 1 sushi with Qty 3 and 1 coke with Qty 1

  //   reduce() is a built-in method that is a method which allows us to transform an array of data into a single value,
  //   into a single number in this case. For data takes two arguments. The first argument is a function  which will be called for you. The second argument is a starting value.

  // The first argument to reduce() i.e. the function takes 2 arguments itself. 

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {/* <span className={classes.badge}>3</span> */}
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
