import React, { Component } from "react";
import "./App.css";
import PickupRequests from "./components/PickupRequests";
import OrderForm from "./components/OrderForm/OrderForm";
import api from "./utils/api";
import Header from "./components/Header/Header";
import { type } from "os";

class App extends Component {
  constructor() {
    super();
    {
      this.state = {
        pickupRequests: [],
        currentLocation: "orderForm"
      };
    }
  }

  getPickupRequests = () => {
    api.getRequest("/pickuprequests", pickupRequests => {
      this.setState({ pickupRequests });
    });
  };

  updateCurrentLocation = location => {
    this.setState({ currentLocation: location });
  };

  componentDidMount() {
    this.getPickupRequests();
  }

  orderForm = (locationStart, locationEnd, time, description) => {
    let order = { locationStart, locationEnd, time, description };
    console.log(typeof locationStart);
    fetch(`/pickuprequests/add`, {
      method: "POST",
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ pickupRequests: data });
      });
  };

  render() {
    return (
      <div className="App">
        <Header updateCurrentLocation={this.updateCurrentLocation} />
        <div className="container">
          {this.state.currentLocation === "pickupRequests" && (
            <PickupRequests pickupRequests={this.state.pickupRequests} />
          )}
          {this.state.currentLocation === "orderForm" && (
            <OrderForm orderForm={this.orderForm} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
