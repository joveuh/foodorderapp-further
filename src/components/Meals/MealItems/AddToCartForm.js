import React from "react";
import Input from "../../UI/Input";
import classes from "./AddToCartForm.module.css";

const AddToCartForm = props => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "20",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default AddToCartForm;
