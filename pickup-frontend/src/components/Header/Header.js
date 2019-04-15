import React from 'react'
import './header.css'
// import Logo from '../../images/pickup.png';
import Logo from '../../images/altLogo.png';

import Nav from '../Nav/Nav'

export default ({ updateCurrentLocation }) => (
    <header className="site-header">
      <div className="branding">
      <div><img className="logo" src={Logo} alt="logo"></img></div>
      </div>
        <Nav updateCurrentLocation={updateCurrentLocation} />
    </header>
)
