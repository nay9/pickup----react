import React, { Component } from "react";
import "./App.css";
import api from "./utils/api";
import Header from "./components/Layout/Header/Header";
import Home from "./components/Layout/Home/Home";
import Modal from "./components/OrderForm/Modal";
import UserView from './components/Layout/User/UserView';
import DriverView from './components/Layout/Driver/DriverView';
import Footer from './components/Layout/Footer/Footer';

class App extends Component {
  constructor() {
    super();
    
      this.state = {
        allOpenOrders: [],
        allAcceptedOrders: [],
        allAcceptedOrderUser: [],
        allCompletedOrders: [],
        allOpenOrdersUser: [],
        currentLocation: "home",
        isShowing: false
      };
    
  }


  
  getAllOpenOrders = () => {
    api.getRequest("/pickuprequests", allOpenOrders => {
      this.setState({ allOpenOrders });
    });
  };
  getAllOpenOrdersUser = () => {
    api.getRequest("/pickuprequests", allOpenOrdersUser => {
      this.setState({ allOpenOrdersUser });
    });
  };

  getAllAcceptedOrders = () => {
    api.getRequest("/pickuprequests", allAcceptedOrders => {
      this.setState({ allAcceptedOrders });
    });
  };
  getAllAcceptedOrderUser = () => {
    api.getRequest("/pickuprequests", allAcceptedOrderUser => {
      this.setState({ allAcceptedOrderUser });
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
    this.getAllOpenOrdersUser();
    this.getAllAcceptedOrderUser();
  }
  openModalHandler = () => {
    this.setState({
        isShowing: true
    });}
    closeModalHandler = () => {
      this.setState({
          isShowing: false
      });
  }
  orderForm = (locationStart, locationEnd, date, time, description, img) => {
    let order = { locationStart, locationEnd, date, time, description, img };

    fetch(`/pickuprequests/add`, {
      method: "POST",
      body: JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ 
          allOpenOrders: data, 
          allOpenOrdersUser: data
         });
      });
      this.setState({ currentLocation: "user", isShowing:true});      
      
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
          allAcceptedOrders: data,
          allOpenOrdersUser: data,
          allAcceptedOrderUser: data
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
          allAcceptedOrders: data,
          allAcceptedOrderUser: data,
          allOpenOrdersUser: data
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


        <div className="mt4">
          {this.state.currentLocation === "home" && (
            <Home 
              updateCurrentLocation={this.updateCurrentLocation}
            />       
          )}


          {this.state.currentLocation === "user" && (
            <UserView
              allOpenOrdersUser={this.state.allOpenOrdersUser} 
              allAcceptedOrderUser={this.state.allAcceptedOrderUser}
              orderForm={this.orderForm} 
              isShowing={this.isShowing}
            /> 
           
            )}

            {this.state.currentLocation === "user" && (
            <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}
            
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
        
        <Footer />
      </div>
    );
  }
}

export default App;
