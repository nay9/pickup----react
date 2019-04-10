import React from 'react'
import './header.css'
import Logo from '../../images/pickup.png';

import Nav from '../Nav/Nav'

export default ({ updateCurrentLocation }) => (
    <header className="site-header">
      <div className="branding">
      <div className="logo"><img src={Logo}></img></div>
      </div>
        <Nav updateCurrentLocation={updateCurrentLocation} />
    </header>
)
