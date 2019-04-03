import React, { Component } from 'react';
import './App.css';
import PickupRequests from './components/PickupRequests';
import AddPickupRequest from './components/AddPickupRequest';


class App extends Component {
  constructor() {
    super();
    { this.state = { pickupRequests: [] } }
  }
  getPickupRequests = () => {
    fetch("/pickuprequests")
      .then(res => res.json())
      .then(data => {
        this.setState({ pickupRequests: data });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }
  componentDidMount() { this.getPickupRequests() };

  addPickupRequest = (state) => {
    fetch(`/pickuprequests/add`, {
      method: "POST",
      body: JSON.stringify(state)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ pickupRequests: data });
        console.log(this.state);
      }
      )
  }

  render() {
    return (
      <div className="App" >
        <h1>Pick^p</h1>

        <PickupRequests
          pickupRequests={this.state.pickupRequests}
          addPickupRequest={this.addPickupRequest} />
      </div>
    );
  }
}

export default App;
