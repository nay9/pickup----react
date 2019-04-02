import React, { Component } from 'react'
import PickupRequest from './PickupRequest';



class PickupRequests extends Component {

  
  render() {

    return (
      <div>
        {this.props.pickupRequests.map((pickupRequest) => (
          <div key ={pickupRequest.id}>
          <PickupRequest 
            pickupRequest={pickupRequest} 
            AddPickupRequest={this.props.AddPickupRequest}/>
          </div>
          ))}
      </div>
    )
  }
}
export default PickupRequests;