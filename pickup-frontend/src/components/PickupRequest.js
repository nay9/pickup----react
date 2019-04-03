import React, { Component } from "react";


class PickupRequest extends Component {
  render() {
    const {id, locationStart, locationEnd, time, description} = this.props.pickupRequest;

    return (
    
    <React.Fragment>
        <p>{ id }</p>
        <p>{ locationStart }</p>
        <p>{ locationEnd }</p>
        <p>{ time }</p>
        <p>{ description }</p>
    </React.Fragment> 
    )
  }
}


export default PickupRequest;