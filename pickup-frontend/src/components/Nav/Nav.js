import React from 'react'
import './nav.css'
//import './Nav.css'

export default ({ updateCurrentLocation }) => (
    <nav className="nav">
        <ul className="nav-list">
            <li className="nav-list-item"><a onClick={() => updateCurrentLocation('orderForm')}>Order</a></li>
            <li className="nav-list-item"><a onClick={() => updateCurrentLocation('allOpenOrders')}>All Orders</a></li>
            <li className="nav-list-item"><a onClick={() => updateCurrentLocation('home')}>Home</a></li>
            <li className="nav-list-item"><a onClick={() => updateCurrentLocation('user')}>User</a></li>
            <li className="nav-list-item"><a onClick={() => updateCurrentLocation('driver')}>Driver</a></li>
        </ul>
    </nav>
)