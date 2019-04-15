import React, { Component } from 'react'
import './Home.css'
import Subheader from '../Subheader/Subheader'
import HowTo from './HowTo'

export class Home extends Component {
  render() {
    return (  

      <React.Fragment>
        <Subheader updateCurrentLocation={this.props.updateCurrentLocation} />
        <HowTo />
         
      </React.Fragment>
    )
  }
}
export default Home
