import React, { Component } from 'react'
import AllOpenOrdersUser from '../../PickupRequest/AllOpenOrdersUser';
import AllAcceptedOrdersUser from '../../PickupRequest/AllAcceptedOrdersUser';
import OrderForm from '../../OrderForm/OrderForm';
import './userview.css'

class User extends Component {

  render() {

    return (

      <React.Fragment>
         
        <AllOpenOrdersUser
          allOpenOrdersUser={this.props.allOpenOrdersUser} 
        />
        
        <AllAcceptedOrdersUser
          allAcceptedOrders={this.props.allAcceptedOrdersUser}
          
        />

        <OrderForm
          orderForm={this.props.orderForm} 
        />

      </React.Fragment>
        
    )
  }
}

export default User


