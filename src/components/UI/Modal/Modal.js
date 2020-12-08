import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Aux from "../../../hoc/Aux";
import BurgerSummary from "../../../components/Burger/BurgerSummary/BurgerSummary";
import axios from "axios";
import { Redirect } from "react-router-dom";

const modal = (props) => {
  const temp = () => {
    console.log("close");
  };

  const buyBorger = () => {
    props.setPurchasing();
    const borger = {
      ingredients: props.ingredients,
      price: props.price,
      time: new Date(),
    };
    axios
      .post("https://react-my-burger-4d3bf.firebaseio.com/orders.json", borger)
      .then((response) => {
        props.setPurchased();
      });
  };

  const modelBody = () => {
    if (props.purchasing) {
      return <p>Purchasing...</p>;
    } else if (props.purchased) {
      // redirect user to the past purchases page
      return <Redirect to="/orders" />;
    } else {
      return (
        <BurgerSummary
          ingredients={props.ingredients}
          prices={props.prices}
          price={props.price}
        />
      );
    }
  };

  return (
    <Aux>
      <Modal show={true} onHide={props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Ice Bun Order Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modelBody()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hide}>
            Cancel
          </Button>
          <Button variant="primary" onClick={buyBorger}>
            Confirm Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </Aux>
  );
};

export default modal;
