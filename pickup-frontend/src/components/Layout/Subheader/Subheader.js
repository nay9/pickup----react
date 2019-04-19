import React, { Component } from 'react'
import SubheaderLinks from './SubheaderLinks'
import './subheader.css'

export class Subheader extends Component {
  render() {
    return (
      <section className="subheader">
        <h2>We're your friend with a pickup!</h2>
        <SubheaderLinks 
            updateCurrentLocation={this.props.updateCurrentLocation}
        />
      </section>
    )
  }
}

export default Subheader
