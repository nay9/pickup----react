import React, { Component } from 'react'
import '../Home/howto.css'

export class HowTo extends Component {
  render() {
    return (
        <div className="howto-grid">
            <div className="grid-item">
            <i className="fas fa-couch"></i>
            <p>Big things, Small Car?</p>
        </div>

  <div className="grid-item">
    <i class="fas fa-truck-loading"></i>
      <p>
  
         User
          step1: Create your new order.
          Step2: Track your order.
          Step3: Set back and relax. 
        </p>
    </div>
    <div className="grid-item">
    <i class="fas fa-peace"></i>
        <p>
          Driver
          Step1: View Open Orders.
          Step2: Accept a Convinent Order.
          Step3: Make Money.
        </p>
    </div>
    </div>
    )
  }
}

export default HowTo
