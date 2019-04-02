import React, { Component } from "react";
import PropTypes from "prop-types";

class PickupRequest extends Component {
  render() {
    const {locationStart, locationEnd, time, description} = this.props.pickupRequest;

    return (
    
    <React.Fragment>
        <p>{ locationStart }</p>
        <p>{ locationEnd }</p>
        <p>{ time }</p>
        <p>{ description }</p>
    </React.Fragment> 
    )
  }
}

PickupRequest.propTypes = {
    pickupRequest: PropTypes.object.isRequired,
   }

export default PickupRequest;