import React, { Component } from 'react'
import PickupRequest from './OpenOrders';


class PickupRequests extends Component {


  render() {

    return (
      <div>
        {this.props.pickupRequests.map((pickupRequest) => 
          (
            <div>
              <PickupRequest
                key={pickupRequest.id}
                pickupRequest={ pickupRequest }
                acceptOrder = {this.props.acceptOrder}
              />
            </div>
            

          ))
        }
      </div>
    )
  }
}

export default PickupRequests;