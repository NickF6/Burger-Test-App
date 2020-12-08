import React from "react";

const burgerSummary = (props) => {
  console.log(props.ingredients);

  const listStyle = {
    display: "flex",
    justifyContent: "space-between",
    paddingRight: "3rem",
  };

  const containerStyle = {
    textAlign: "end",
  };

  const totalStyle = {
    paddingRight: "3rem",
  };

  const summary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li style={listStyle} key={igKey}>
        <span>{igKey}</span>
        <span>
          {props.ingredients[igKey] +
            "...$" +
            (props.prices[igKey] * props.ingredients[igKey]).toFixed(2)}
        </span>
      </li>
    );
  });

  return (
    <ul style={containerStyle}>
      {summary}
      <p style={totalStyle}>+$3.00 for ICE BUN</p>
      <p>
        <strong style={totalStyle}>
          Total Price: ${props.price.toFixed(2)}
        </strong>
      </p>
    </ul>
  );
};

export default burgerSummary;
