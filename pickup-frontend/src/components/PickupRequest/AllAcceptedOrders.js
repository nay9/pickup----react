import React, { Component } from 'react'
import AcceptedOrder from './AcceptedOrder'

export class AllAcceptedOrders extends Component {
  render() {
    return (
        <div>
          {this.props.allAcceptedOrders.map((acceptedOrder) => 
            (
              <div>
                <AcceptedOrder
                  key={acceptedOrder.id}
                  acceptedOrder={ acceptedOrder }
                />
              </div>
  
            ))
          }
        </div>
      )   
      
  }
}

export default AllAcceptedOrders
