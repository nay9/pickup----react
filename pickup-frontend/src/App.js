import React, { Component } from 'react';
import './App.css';
import PickupRequests from './components/PickupRequests';
import AddPickupRequest from './components/AddPickupRequest';


class App extends Component {
  constructor(){
    super();
    {this.state = {pickupRequests:[]}}
  }

  // state = {
  //   pickupRequests: [
  //     {
  //       id: 1,
  //       locationStart: 'schoo1',
  //       locationEnd: 'renes M',
  //       time: 'now',
  //       description: 'lorem'
  //     },
  //     {
  //       id: 2,
  //       locationStart: 'schoo2',
  //       locationEnd: 'renes M',
  //       time: 'now',
  //       description: 'lorem'
  //     },
  //     {
  //       id: 3,
  //       locationStart: 'schoo3',
  //       locationEnd: 'renes M',
  //       time: 'now',
  //       description: 'lorem'
  //     }
  //   ]

  // }

  // addPickupRequest = (id) => {
  //   fetch.post('/add')
  //   locationStart,
  //     locationEnd,
  //     time,
  //     description

  // }
  
  getPickupRequests = () => {
    fetch("/pickuprequests")
      .then(res => res.json())
      .then(data => {
        this.setState({ pickupRequests: data });
        console.log(this.state);
      })
      .catch(err =>console.log(err));
  }
componentDidMount() {this.getPickupRequests()};
  render() {
    return (
      <div className="App">
        <h1>App.js</h1>
       
        <PickupRequests
          pickupRequests={this.state.pickupRequests}  />
      </div>
    );
  }
}

export default App;
