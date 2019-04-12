import React, { Component } from "react";
import './PickupRequest.css'
import MapContainer from '../MapContainer'

class OpenOrder extends Component {


  render() {
    const { id, locationStart, locationEnd, time, description, status, img } = this.props.openOrder;

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
            <div className="itemPicture" >
            <img className="box-item" src={img}>Item to Move:</img>
            </div>
          </div>
          <div className="grid__item">
              <div className="map" >
                  <MapContainer />
              </div>
          </div>
        </section>
     
    </div>
    )} 

    else return ("")
  }
}

export default OpenOrder;

