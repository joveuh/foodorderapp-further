import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals App</h1>
        <HeaderCartButton />
      </header>
      {/* we use classes[] because there is a hyphen '-' in the style name */}
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Sample food." />
      </div>
    </Fragment>
  );
};

export default Header;
