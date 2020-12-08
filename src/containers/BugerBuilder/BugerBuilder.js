import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import classes from "./BurgerBuilder.module.css";
import Button from "react-bootstrap/Button";
import Modal from "../../components/UI/Modal/Modal";

const PRICES = {
  bacon: 0.8,
  salad: 0.4,
  meat: 1.0,
  cheese: 0.75,
};

class BurgerBuilder extends Component {
  // set the state of the burger
  state = {
    showModal: false,
    purchasing: false,
    purchased: false,
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false, purchasing: false, purchased: false });
  };

  setPurchasing = () => {
    this.setState({ purchasing: true });
  };

  setPurchased = () => {
    this.setState({ purchasing: false, purchased: true });
  };

  render() {
    return (
      <Aux>
        <div>
          <Burger ingredients={this.props.igd} />
        </div>
        <div className={classes.BurgerControlsContainer}>
          <h3 className={classes.Price}>
            <strong>Price: {this.props.pr.toFixed(2)}</strong>
          </h3>
          <BurgerControls
            ingredients={this.props.igd}
            add={this.props.onAddIngredient}
            subtract={this.props.onSubtractIngredient}
            igd={this.props.igd}
          />
          <Button className={classes.Purchase} onClick={this.showModal}>
            Purchase
          </Button>
        </div>
        {this.state.showModal ? (
          <Modal
            prices={PRICES}
            ingredients={this.props.igd}
            hide={this.hideModal}
            price={this.props.pr}
            purchasing={this.state.purchasing}
            purchased={this.state.purchased}
            setPurchasing={this.setPurchasing}
            setPurchased={this.setPurchased}
          />
        ) : null}
      </Aux>
    );
  }
}

// this is the subscription
const mapStateToProps = (state) => {
  return {
    igd: state.ingredients,
    pr: state.price,
  };
};

// this is the dispatch call
const mapDispatchToProps = (dispatch) => {
  return {
    onAddIngredient: (para) => dispatch({ type: "ADD", para: para }),
    onSubtractIngredient: (para) => dispatch({ type: "SUBTRACT", para: para }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
