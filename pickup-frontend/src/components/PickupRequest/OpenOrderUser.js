import React, { Component } from "react";
import './PickupRequest.css'
import Map from '../Map/Map'

class OpenOrderUser extends Component {


  render() {
    const { id, locationStart, locationEnd, date, time, description, status, img } = this.props.openOrderUser;

    if (status === 'OPEN'){
    return (
    <div className="box">
        <section className="grid__section">
          <div className="grid__item">
            <h2 className="box-item">{ description }</h2>
            <p className="box-item">Starting Location: { locationStart }</p>
            <p className="box-item">Destination: { locationEnd }</p>            
            <p className="box-item">Date of Delivery: { date }</p>
            <p className="box-item">Time of Delivery: { time }</p>
            <p className="box-item">Status: { status }</p>
            <p className="">Order ID: { id }</p>
            </div>
            <div className= "grid__item">
            <h1>Item:</h1>
            <img src= {img}/>
            </div>
          <div className="grid__item">
            <h1>Location:</h1>
            <div className="mapDirections" >
                  <Map 
                  origin = {locationStart} 
                  destination = {locationEnd}
                  />
              </div>
          </div>
        </section>
    </div>
    )} 
   
    else return ("")
  }
}

export default OpenOrderUser;

