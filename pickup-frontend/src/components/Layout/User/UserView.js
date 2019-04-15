import React, { Component } from 'react'
import AllOpenOrdersUser from '../../PickupRequest/AllOpenOrdersUser';
import AllAcceptedOrderUser from '../../PickupRequest/AllAcceptedOrderUser';
import OrderForm from '../../OrderForm/OrderForm';
import './userview.css'

class User extends Component {

  render() {

    return (

      <React.Fragment>
         
        <AllOpenOrdersUser
          allOpenOrdersUser={this.props.allOpenOrdersUser} 
        />
        
        <AllAcceptedOrderUser
          allAcceptedOrderUser={this.props.allAcceptedOrderUser}
          
        />

        <OrderForm
          orderForm={this.props.orderForm} 
        />

      </React.Fragment>
        
    )
  }
}

export default User


