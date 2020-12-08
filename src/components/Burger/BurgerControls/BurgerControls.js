import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./BurgerControls.module.css";
import Button from "react-bootstrap/Button";

class burgerControls extends Component {
  // create a list of control inputs
  render() {
    let transformedIngredients = Object.keys(this.props.igd).map(
      (ingredient) => {
        return (
          <div key={ingredient} className={classes.Controls}>
            <h3>{ingredient}</h3>
            <Button
              variant="secondary"
              onClick={() => this.props.add(ingredient)}
            >
              More
            </Button>
            <Button
              variant="secondary"
              onClick={() => this.props.subtract(ingredient)}
            >
              Less
            </Button>
          </div>
        );
      }
    );
    return transformedIngredients;
  }
}

export default burgerControls;
