import React, { Component } from 'react'
import AllOpenOrders from '../../PickupRequest/AllOpenOrders';
import AllAcceptedOrders from '../../PickupRequest/AllAcceptedOrders';
import AllCompletedOrders from '../../PickupRequest/AllCompletedOrders';


export class DriverView extends Component {
  render() {
    return (
      <React.Fragment>
        <AllAcceptedOrders
            allAcceptedOrders={this.props.allAcceptedOrders}
            markComplete={this.props.markComplete}
        />
        <AllOpenOrders
            allOpenOrders={this.props.allOpenOrders}
            assignOrder={this.props.assignOrder}
        />
        <AllCompletedOrders
            allCompletedOrders={this.props.allCompletedOrders}
        />
      </React.Fragment>
    )
  }
}

export default DriverView
