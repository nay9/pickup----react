import React, { Component } from 'react'
import '../Home/howto.css'

export class HowTo extends Component {
  render() {
    return (
      <div className="howto">
 
     
        <div className="howto-grid">
            <div className="grid-item a">
            <h3>Big Things, Small Car?</h3>
            <p>We can help with that!</p>
            <p>Just snap a pic of your item and we will connect you with a driver.</p>
      
            <i className="fas fa-couch"></i>
        </div>


  <div className="grid-item b">
    

      
  
         <h3>User</h3>
          <p>Step 1: Create new order.</p>
          <p>Step 2: Track your order.</p>
          <p>Step 3: Sit back and relax.</p>
          <i className="fas fa-peace"></i>
    
    </div>

  
    <div className="grid-item c">
    

    <h3>Driver</h3>
        <p>Step 1: View Open Orders.</p>
        <p>Step 2: Accept an Order.</p>
        <p>Step 3: Make Money.</p>
        <i className="fas fa-truck-loading"></i>
    </div>
    
    </div>
    </div>
    )
  }
}

export default HowTo
