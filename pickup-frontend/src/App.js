import React, { Component } from "react";
import "./App.css";
import AllOpenOrders from "./components/PickupRequest/AllOpenOrders";
import OrderForm from "./components/OrderForm/OrderForm";
import api from "./utils/api";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import HomeButton from "./components/Home/HomeButton";
import AllAcceptedOrders from "./components/PickupRequest/AllAcceptedOrders";
import AllCompletedOrders from "./components/PickupRequest/AllCompletedOrders";


class App extends Component {
  constructor() {
    super();
    
      this.state = {
        allOpenOrders: [],
        allAcceptedOrders: [],
        allCompletedOrders: [],
        currentLocation: "home"
      };
    
  }


  
  getAllOpenOrders = () => {
    api.getRequest("/pickuprequests", allOpenOrders => {
      this.setState({ allOpenOrders });
    });
  };

  getAllAcceptedOrders = () => {
    api.getRequest("/pickuprequests", allAcceptedOrders => {
      this.setState({ allAcceptedOrders });
    });
  };

  getAllCompletedOrders = () => {
    api.getRequest("/pickuprequests", allCompletedOrders => {
      this.setState({ allCompletedOrders });
    });
  };

  updateCurrentLocation = location => {
    this.setState({ currentLocation: location });
  };

  componentDidMount() {
    this.getAllCompletedOrders();
    this.getAllAcceptedOrders();
    this.getAllOpenOrders();
  }

  orderForm = (locationStart, locationEnd, time, description) => {
    let order = { locationStart, locationEnd, time, description };
    fetch(`/pickuprequests/add`, {
      method: "POST",
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ allOpenOrders: data });
      });
  };

  assignOrder = id => {
    let orderId = { id };
    fetch(`/driver/accept/`, {
      method: "POST",
      body: JSON.stringify(orderId)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          allOpenOrders: data,
          allCompletedOrders: data,
          allAcceptedOrders: data
        });
      });
    this.setState({ currentLocation: "driver" });
  };


  
  markComplete = id => {
    let orderId = { id };
    fetch(`/driver/accept/`, {
      method: "POST",
      body: JSON.stringify(orderId)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          allOpenOrders: data,
          allCompletedOrders: data,
          allAcceptedOrders: data
        });
      });
    this.setState({ currentLocation: "driver" });
  };

  render() {
    return (
      <div className="App">
        <Header updateCurrentLocation={this.updateCurrentLocation} />

        <div className="container">
          {this.state.currentLocation === "home" && (
            <div>
              <Home />
              <HomeButton updateCurrentLocation={this.updateCurrentLocation} />
            </div>
          )}

          {this.state.currentLocation === "user" && (
            <div>
              <AllOpenOrders allOpenOrders={this.state.allOpenOrders} />
              <AllAcceptedOrders
                allAcceptedOrders={this.state.allAcceptedOrders}
              />
              <OrderForm orderForm={this.orderForm} />
            </div>
          )}

          {this.state.currentLocation === "driver" && (
            <div>
              <AllAcceptedOrders
                allAcceptedOrders={this.state.allAcceptedOrders}
                markComplete={this.markComplete}
              />
              <AllOpenOrders
                allOpenOrders={this.state.allOpenOrders}
                assignOrder={this.assignOrder}
              />
              <AllCompletedOrders
                allCompletedOrders={this.state.allCompletedOrders}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
