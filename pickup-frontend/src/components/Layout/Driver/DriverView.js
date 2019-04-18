import React, { Component } from 'react'
import AllOpenOrders from '../../PickupRequest/AllOpenOrders';
import AllAcceptedOrders from '../../PickupRequest/AllAcceptedOrders';
import AllCompletedOrders from '../../PickupRequest/AllCompletedOrders';
import MapContainer from '../../Map/MapContainer';
import './DriverView.css'
import '../../PickupRequest/PickupRequest.css'


export class DriverView extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="driverMap">
           <MapContainer x/>
        </div>
        <div className="rest">
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
        </div>
      </React.Fragment>
    )
  }
}

export default DriverView
