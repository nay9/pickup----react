import React, { Component } from 'react'
import PickupRequest from './PickupRequest';




class PickupRequests extends Component {


  render() {

    return (
      <div>
        {this.props.pickupRequests.map((pickupRequest) => (
          <div>
            <PickupRequest
              key={pickupRequest.id}
              pickupRequest={pickupRequest} />
          </div>
        ))}
      </div>
    )
  }
}

export default PickupRequests;