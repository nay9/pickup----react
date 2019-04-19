import React, { Component } from 'react'
import AllOpenOrdersUser from '../../PickupRequest/AllOpenOrdersUser';
import AllAcceptedOrderUser from '../../PickupRequest/AllAcceptedOrderUser';
import OrderForm from '../../OrderForm/OrderForm';
import './userview.css'
import '../../OrderForm/Modal.css'

class User extends Component {



  render() {

    return (
<React.Fragment>
      



        <OrderForm
          orderForm={this.props.orderForm}
        />

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