import React, { Component } from "react";
import "./App.css";
import api from "./utils/api";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import UserView from './components/Layout/User/UserView';
import DriverView from './components/Layout/Driver/DriverView';


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

  orderForm = (locationStart, locationEnd, time, description, img) => {
    let order = { locationStart, locationEnd, time, description, img };
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
        <Header 
          updateCurrentLocation={this.updateCurrentLocation} 
        />


        <div className="container">
          {this.state.currentLocation === "home" && (
            <Home 
              updateCurrentLocation={this.updateCurrentLocation}
            />       
          )}


          {this.state.currentLocation === "user" && (
            <UserView
              allOpenOrders={this.state.allOpenOrders} 
              allAcceptedOrders={this.state.allAcceptedOrders}
              orderForm={this.orderForm} 
            /> 
            )}


          {this.state.currentLocation === "driver" && (
            <DriverView
              allAcceptedOrders={this.state.allAcceptedOrders}
              markComplete={this.markComplete}
              allOpenOrders={this.state.allOpenOrders}
              assignOrder={this.assignOrder}
              allCompletedOrders={this.state.allCompletedOrders}
            />
          )} 
        </div>
      </div>
    );
  }
}

export default App;
