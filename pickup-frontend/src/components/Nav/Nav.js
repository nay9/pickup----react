import React from 'react'
import './nav.css'
//import './Nav.css'

export default ({ updateCurrentLocation }) => (
    <nav className="nav">
        <ul className="nav-list">
            <li className="nav-list-item"><a onClick={() => updateCurrentLocation('orderForm')}>Order</a></li>
            <li className="nav-list-item"><a onClick={() => updateCurrentLocation('pickupRequests')}>All Orders</a></li>
            <li className="nav-list-item"><a onClick={() => updateCurrentLocation('home')}>Home</a></li>
        </ul>
    </nav>
)