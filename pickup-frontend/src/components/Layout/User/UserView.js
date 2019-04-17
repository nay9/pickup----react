import React, { Component } from 'react'
import AllOpenOrdersUser from '../../PickupRequest/AllOpenOrdersUser';
import AllAcceptedOrderUser from '../../PickupRequest/AllAcceptedOrderUser';
import OrderForm from '../../OrderForm/OrderForm';
import './userview.css'

class User extends Component {

  render() {

    return (

      <React.Fragment>
        <section className="title__user">
        <h1>Submit An Order Here:</h1>
        
        <OrderForm
          orderForm={this.props.orderForm} 
        />
        </section>


        <AllOpenOrdersUser
          allOpenOrdersUser={this.props.allOpenOrdersUser} 
        />
      
        <AllAcceptedOrderUser
          allAcceptedOrderUser={this.props.allAcceptedOrderUser}
          
        />

        

      </React.Fragment>
        
    )
  }
}

export default User


