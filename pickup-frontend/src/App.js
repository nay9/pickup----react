import React, { Component } from "react";
import "./App.css";
import AllOpenOrders from "./components/PickupRequest/AllOpenOrders";
import OrderForm from "./components/OrderForm/OrderForm";
import api from "./utils/api";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AllAcceptedOrders from "./components/PickupRequest/AllAcceptedOrders"
import AllCompletedOrders from './components/PickupRequest/AllCompletedOrders'


class App extends Component {
  constructor() {
    super();
    {
      this.state = {
        allOpenOrders: [],
        allAcceptedOrders: [],
        allCompletedOrders: [],
        currentLocation: "home"
      };
    }
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
    this.getAllOpenOrders();
    this.getAllAcceptedOrders();
    this.getAllCompletedOrders();
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
        this.setState({ allOpenOrders: data });
      });
  };

  assignOrder = (id) => {
    let orderId = { id };
    fetch(`/driver/accept/`, {
      method: "POST",
      body: JSON.stringify(orderId)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ allOpenOrders: data });
      });
      this.setState({ currentLocation: AllOpenOrders });
    };

    markComplete = (id) => {
      let orderId = { id };
      fetch(`/driver/accept/`, {
        method: "POST",
        body: JSON.stringify(orderId)
      })
        .then(res => res.json())
        .then(data => {
          this.setState({ allAcceptedOrders: data });
          this.setState({ allCompletedOrders: data });
        });
        this.setState({ currentLocation: AllOpenOrders});
      };

  render() {
    return (
      <div className="App">

        <Header updateCurrentLocation={this.updateCurrentLocation} />

        <div className="container">

          
          {this.state.currentLocation === "allOpenOrders" && (
            <AllOpenOrders 
            allOpenOrders={this.state.allOpenOrders} 
              assignOrder={this.assignOrder}
            />
          )}
          
          {this.state.currentLocation === "orderForm" && (
            <OrderForm orderForm={this.orderForm} />
          )}
            
           {this.state.currentLocation === "home" && (
            <div className="">
              <Home /> 
              <OrderForm orderForm={this.orderForm} />
            </div>
          )}

            {this.state.currentLocation === "user" && (
            <div className="">
              <AllAcceptedOrders allAcceptedOrders={this.state.allAcceptedOrders} />
              <OrderForm orderForm={this.orderForm} />
            </div>
          )} 

           {this.state.currentLocation === "driver" && (
            <div className="">
              <AllAcceptedOrders 
                allAcceptedOrders={this.state.allAcceptedOrders} 
                markComplete={this.markComplete}/>
              <AllCompletedOrders allCompletedOrders={this.state.allCompletedOrders} />
              <OrderForm orderForm={this.orderForm} />

            </div>
          )}    
        </div>
      </div>
    );
  }
}

export default App;
