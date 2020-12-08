import React from "react";
import Burger from "../../components/Burger/Burger";
import classes from "./BurgerOrder.module.css";

const BurgerOrder = (props) => {
  const dateFormatHandler = (date) => {
    const format_date = new Date(date);
    return format_date.toString().split(" ").slice(1, 5).join(" ");
  };

  return (
    <tr>
      <td>
        <div className={classes.BurgerOrder}>
          <Burger minify={true} ingredients={props.ingredients} />
        </div>
      </td>
      <td className={classes.Price}>
        Cost: $ {props.price.toFixed(2)} <br /> Ordered:{" "}
        {dateFormatHandler(props.time)}
      </td>
    </tr>
  );
};

export default BurgerOrder;
