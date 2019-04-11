import React, { Component } from 'react'
import AllOpenOrders from '../../PickupRequest/AllOpenOrders';
import AllAcceptedOrders from '../../PickupRequest/AllAcceptedOrders';
import OrderForm from '../../OrderForm/OrderForm';
import './userview.css'

class User extends Component {

  render() {

    return (

      <React.Fragment>
         
        <AllOpenOrders 
          allOpenOrders={this.props.allOpenOrders} 
        />
        
        <AllAcceptedOrders
          allAcceptedOrders={this.props.allAcceptedOrders}
          
        />

        <OrderForm
          orderForm={this.props.orderForm} 
        />

      </React.Fragment>
        
    )
  }
}

export default User


