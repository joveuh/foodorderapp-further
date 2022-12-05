import CartContext from "./CartContext";

// And now we can simply pass props.children  between CartContext.Provider
// This allows us to wrap any components that should get access to CartContext with this CartProvider component.

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

// And we can also add all the logic for managing the context data to this CartProvider component,
// so that all of that is contained in one component, and that way no other component needs to deal with that.

export default CartProvider;
