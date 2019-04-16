import React from 'react'
import './header.css'
import Logo from '../../../images/altLogo.png';
import Nav from '../../Nav/Nav'

export default ({ updateCurrentLocation }) => (
    <header className="site-header">
      <div className="branding">
      <img className="logo" src={Logo} alt="logo" onClick={() => updateCurrentLocation('home')}></img>
      </div>
    </header>
)
