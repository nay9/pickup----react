import React, { Component } from 'react'
import PropTypes from 'prop-types';
import PickupRequest from './PickupRequest';
import AddPickupRequest from './AddPickupRequest';



class PickupRequests extends Component {


  render() {

    return (
      <div>
        <div>
          <AddPickupRequest
            addPickupRequest={this.props.addPickupRequest} />
        </div>
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

PickupRequests.propTypes = {
  pickupRequests: PropTypes.array.isRequired,
}
export default PickupRequests;