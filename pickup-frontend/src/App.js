import React, { Component } from "react";
import "./App.css";
import PickupRequests from "./components/PickupRequests";
import AddPickupRequest from "./components/AddPickupRequest";
import Header from "./components/layout/Header";

class App extends Component {
  constructor() {
    super();
    {
      this.state = { 
        
        pickupRequests: [],
        currentLocation: 'addPickupRequest'

      };
    
    
    
    }
  }




  // getPickupRequests = () => {
  //   fetch("/pickuprequests")
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ pickupRequests: data });
  //       console.log(this.state);
  //     })
  //     .catch(err => console.log(err));
  // };
  componentDidMount() {
    this.getPickupRequests();
  }

  render() {
    return (
      <div className="App">
        <Header updateCurrentLocation = {this.updateCurrentLocation}/>
        <div className="container">
          {this.state.currentLocation === 'pickupRequests' && <PickupRequests pickupRequests={this.state.pickupRequests}/>}
          {this.state.currentLocation === 'addPickupRequests' && <AddPickupRequest addPickupRequests={this.state.addPickupRequests}/>}
        </div>
      </div>
    );
  }
}

export default App;
