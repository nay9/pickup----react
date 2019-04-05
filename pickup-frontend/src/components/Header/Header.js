import React from 'react'
import './header.css'

import Nav from '../Nav/Nav'

export default ({ updateCurrentLocation }) => (
    <header className="site-header">
      <div className="branding">
        <h1>Pickup</h1>
      </div>
        <Nav updateCurrentLocation={updateCurrentLocation} />
    </header>
)
