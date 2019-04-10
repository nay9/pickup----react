import React, { Component } from 'react'
import CompletedOrder from './CompletedOrder'

export class AllCompletedOrders extends Component {
  render() {
    return (
        <div>
          <h2>Order History</h2>
          {this.props.allCompletedOrders.map((completedOrder) => 
            (
              <div>
                <CompletedOrder
                  key={completedOrder.id}
                  completedOrder={ completedOrder }
                />
              </div>
  
            ))
          }
        </div>
      )   
      
  }
}

export default AllCompletedOrders
