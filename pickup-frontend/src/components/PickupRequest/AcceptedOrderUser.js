import React, { Component } from 'react'

export class AcceptedOrderUser extends Component {
 
 
  render() {
    const { id, locationStart, locationEnd, time, description, status } = this.props.acceptedOrderUser;

    if (status === 'DOING'){
    return (
        <div className="box">
                <h2 className="box-item">{ description }</h2>
                <p className="box-item">Driver</p>
                <p className="box-item">Starting Location: { locationStart }</p>
                <p className="box-item">Destination: { locationEnd }</p>
                <p className="box-item">Time of Delivery: { time }</p>
                <p className="box-item">Status: { status }</p>
                <p className="">Order Confirmation: { id }</p>
        </div> )} 

    else return ("")
  }
}

export default AcceptedOrderUser
