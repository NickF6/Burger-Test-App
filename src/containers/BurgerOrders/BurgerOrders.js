import React, { Component } from "react";
import BurgerOrder from "../../components/BurgerOrder/BurgerOrder";
import axios from "axios";
import classes from "./BurgerOrders.module.css";
import Table from "react-bootstrap/Table";

class BurgerOrders extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    axios
      .get("https://react-my-burger-4d3bf.firebaseio.com/orders.json")
      .then((response) => {
        const orders = [];
        for (let key in response.data) {
          orders.push(response.data[key]);
        }
        this.setState({ orders: orders });
      });
  }

  render() {
    return (
      <div className={classes.TableBorder}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan="2" className={classes.TableTitle}>
                Burger Orders
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.reverse().map((order) => {
              return (
                <BurgerOrder
                  key={order.time}
                  ingredients={order.ingredients}
                  price={order.price}
                  time={order.time}
                ></BurgerOrder>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default BurgerOrders;
