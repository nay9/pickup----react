import React, { Component } from 'react';
import './App.css';
import PickupRequests from './components/PickupRequests';
import AddPickupRequest from './components/AddPickupRequest';


class App extends Component {

  state = {
    pickupRequests : [
      {
        id: 1,
        locationStart: 'schoo1',
        locationEnd: 'renes M',
        time: 'now',
        description: 'lorem'
      },
      {
        id: 2,
        locationStart: 'schoo2',
        locationEnd: 'renes M',
        time: 'now',
        description: 'lorem'
      },
      {
        id: 3,
        locationStart: 'schoo3',
        locationEnd: 'renes M',
        time: 'now',
        description: 'lorem'
      }
    ]

  }

// addPickupRequest=() => {

// }

  render() {
    return (
      <div className="App">
        <h1>App.js</h1>
        <AddPickupRequest />
        <PickupRequests 
          pickupRequests={this.state.pickupRequests} AddPickupRequest={this.addPickupRequest}/>
      </div>
    );
  }
}

export default App;
