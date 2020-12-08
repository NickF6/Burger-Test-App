import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BugerBuilder/BugerBuilder";
import BugerOrders from "./containers/BurgerOrders/BurgerOrders";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importing the Bootstrap CSS <-- this is immportant
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/orders" component={BugerOrders} />
            <Route path="/" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
