import React from 'react'
import './nav.css'
//import './Nav.css'

export default ({ updateCurrentLocation }) => (
    <nav className="nav">
        <ul className="nav-list">
            <li className="nav-list-item" onClick={() => updateCurrentLocation('home')}>Home</li>
            <li className="nav-list-item" onClick={() => updateCurrentLocation('user')}>User</li>
            <li className="nav-list-item" onClick={() => updateCurrentLocation('driver')}>Driver</li>
        </ul>
    </nav>
)