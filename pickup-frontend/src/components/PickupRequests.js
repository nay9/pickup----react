import React, { Component } from 'react'
import PropTypes from 'prop-types';



class PickupRequests extends Component {

  
  render() {

    return (
      <div>
        {this.props.pickupRequests.map((pickupRequest) => (
          <div>
          <h2>{ pickupRequest.id }</h2> 
          </div>
          ))}
      </div>
    )
  }
}

PickupRequests.propTypes = {
 pickupRequests: PropTypes.string.isRequired,
}
export default PickupRequests;