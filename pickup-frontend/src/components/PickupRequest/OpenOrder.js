import React, { Component } from "react";
import './PickupRequest.css'
import MapContainer from '../MapContainer'

class OpenOrder extends Component {


  render() {

    const { id, locationStart, locationEnd, time, description, status } = this.props.openOrder;


    if (status === 'DO'){
    return (
    <div className="box">
        <section className="grid__section">
          <div className="grid__item">
            <h2 className="box-item">{ description }</h2>
            <p className="box-item">Starting Location: { locationStart }</p>
            <p className="box-item">Destination: { locationEnd }</p>
            <p className="box-item">Time of Delivery: { time }</p>
            <p className="box-item">Status: { status }</p>
            <p className="">Order Confirmation: { id }</p>
          </div>
          <div className="grid__item">

            <h1>Location</h1>
              <div className="map" >
                  <MapContainer />
              </div>
          </div>
        </section>
      <div id="btnM">
        <button id="btn" onClick={()=>this.props.assignOrder(id) }>Accept Order</button>
      </div>
    </div>
    )} 
   
    else return ("")
  }
}

export default OpenOrder;

