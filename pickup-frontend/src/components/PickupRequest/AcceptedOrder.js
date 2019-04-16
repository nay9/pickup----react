import React, { Component } from 'react'

export class AcceptedOrder extends Component {
 
 
  render() {
    const { id, locationStart, locationEnd, date, time, description, status } = this.props.acceptedOrder;

    if (status === 'DOING'){
    return (
        <div className="box">
                <h2 className="box-item">{ description }</h2>
                <p className="box-item">Driver</p>
                <p className="box-item">Starting Location: { locationStart }</p>
                <p className="box-item">Destination: { locationEnd }</p>
                <p className="box-item">Date of Delivery: { date }</p>
                <p className="box-item">Time of Delivery: { time }</p>
                <p className="box-item">Status: { status }</p>
                <p className="">Order Confirmation: { id }</p>
                <button className="btn" onClick={()=>this.props.markComplete(id) }>Complete</button>
        </div> )} 

    else return ("")
  }
}

export default AcceptedOrder
