import classes from "./Input.module.css";

// Both class and for are reserved keywords in JS ... so we use htmlFor and className instead

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Let's suppose props.input has a key value pair such as {type: 'text'}, then by adding the spread operator we make sure that <input/> gets those props */}
      {/* <input id={props.input.id} {... props.input}/> */}

      {/* We are removing the id prop because we actually expect that coming in from outisde too, just like all the other props.  */}
      <input {... props.input}/>

    </div>
  );
};

export default Input;
