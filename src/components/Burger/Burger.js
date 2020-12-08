import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import classes from "./Burger.module.css";
import BurgerOrder from "../BurgerOrder/BurgerOrder";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredients key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  // note that the reduce function flattens the array, (joins 3, and 4 two at a time)
  // this array is just a 2nd degree array - not a third degree

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Add some ingredients to your bun!</p>;
  }

  let burgerClass = classes.Burger;

  if (props.minify) {
    burgerClass = burgerClass + " " + classes.BurgerOrder;
  }

  return (
    <div className={burgerClass}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
