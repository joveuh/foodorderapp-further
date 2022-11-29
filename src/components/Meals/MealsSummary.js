import classes from "./MealsSummary.module.css";


const MealsSummary = () => {
    return (<section className={classes.summary}>
        <h2> Delicious Food, Delivered To You</h2>
        <p>
            Choose your favorite meals.
        </p>
        <p>
            All meals cooked with your cravings in mind.
        </p>
    </section>
    );
};

export default MealsSummary;