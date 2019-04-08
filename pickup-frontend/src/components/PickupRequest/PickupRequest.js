import React, { Component } from "react";
import './PickupRequest.css'

class PickupRequest extends Component {





  render() {
    const { id, locationStart, locationEnd, time, description } = this.props.pickupRequest;

    return (
    
    <div className="box">
      <form className="" onSubmit={this.onSubmit}>
          <h2 className="box-item">{ description }</h2>
          <p className="box-item">Starting Location: { locationStart }</p>
          <p className="box-item">Destination: { locationEnd }</p>
          <p className="box-item">Time of Delivery: { time }</p>
          <p className="">Order Confirmation: { id }</p>
          <button className="btn" onClick={()=>this.props.acceptOrder(id) }>Accept Order</button>
      </form>
    </div> 

    )
  }
}


export default PickupRequest;