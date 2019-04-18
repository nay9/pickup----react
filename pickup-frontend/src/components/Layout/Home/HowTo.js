import React, { Component } from 'react'
import '../Home/howto.css'

export class HowTo extends Component {
  render() {
    return (
      <div className="howto">
        <h2>Big ideas, Small Car?</h2>
     
        <div className="howto-grid">
            <div className="grid-item a">
            <i className="fas fa-couch"></i>
            <p>Big ideas, Small Car?</p>
        </div>


  <div className="grid-item">
    <i className="fas fa-truck-loading"></i>

      <p>
  
         User
          step1: Create your new order.
          Step2: Track your order.
          Step3: Sit back and relax. 
        </p>
    </div>

    <div className="grid-item">
    <i className="fas fa-peace"></i>

        <p>
          Driver
          Step1: View Open Orders.
          Step2: Accept a Convenient Order.
          Step3: Make Money.
        </p>
    </div>
    </div>
    </div>
    )
  }
}

export default HowTo
