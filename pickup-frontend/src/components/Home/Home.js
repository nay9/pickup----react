import React, { Component } from 'react'
import './Home.css'
import HomeButton from './HomeButton.js'

export class Home extends Component {
  render() {
    return (    
    <article className="wrapper">
    {/* <HomeButton updateCurrentLocation={updateCurrentLocation} /> */}
      <section className="modal hide">   
          <div className="logo__box">
          {/* <div className="logo"><img src={Logo}></img></div> */}
              <p>
                Big Move, Small Car? 
              </p>
              <h1>Find Your PICKUP Now!!</h1>
        </div>
        <div className="user__steps">
            <p>
               User
                step1: Create your new order.
                Step2: Track your order.
                Step3: Set back and relax. 
              </p>
          </div>
          <div className="driver__steps">
              <p>
                Driver
                Step1: View Open Orders.
                Step2: Accept a Convinent Order.
                Step3: Make Money.
              </p>
          </div>
      </section> 
    </article>   
    )
  }
}
export default Home
