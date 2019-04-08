import React, { Component } from "react";
import './PickupRequest.css'

class PickupRequest extends Component {





  render() {
    const { id, locationStart, locationEnd, time, description, status } = this.props.pickupRequest;

    if (status === 'DO'){
    return (
    <div className="box">
      <form className="" onSubmit={this.onSubmit}>
          <h2 className="box-item">{ description }</h2>
          <p className="box-item">Starting Location: { locationStart }</p>
          <p className="box-item">Destination: { locationEnd }</p>
          <p className="box-item">Time of Delivery: { time }</p>
          <p className="box-item">Status: { status }</p>
          <p className="">Order Confirmation: { id }</p>
          <button className="btn" onClick={()=>this.props.acceptOrder(id) }>Accept Order</button>
      </form>
    </div> )} 

    else return ("")
  }
}


export default PickupRequest;

