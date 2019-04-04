import React, { Component } from 'react'

///Non working. Added update location. added state.

export default () => {
  render() {
    return (
      <header className="site-header">
        <div className="branding">
          <h1>Pickup</h1>
        </div>
      <navbar>
        <ul className="nav-list">
          <li className="nav-list-item"><a onClick = {()=> updateCurrentLocation('addPickupRequest')}>Order Form</a></li>
          <li className="nav-list-item"><a onClick = {()=> updateCurrentLocation('pickupRequests')}>All Orders</a></li>  
        </ul>
      </navbar>        
      </header>
    )
  }
}


