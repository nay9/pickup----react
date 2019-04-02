import React, { Component } from 'react'
import PropTypes from 'prop-types';
import PickupRequest from './PickupRequest';



class PickupRequests extends Component {

  
  render() {

    return (
      <div>
        {this.props.pickupRequests.map((pickupRequest) => (
          <div>
          <PickupRequest
            key={pickupRequest.id}
            pickupRequest={pickupRequest}/>
          </div>
          ))}
      </div>
    )
  }
}

PickupRequests.propTypes = {
 pickupRequests: PropTypes.array.isRequired,
}
export default PickupRequests;