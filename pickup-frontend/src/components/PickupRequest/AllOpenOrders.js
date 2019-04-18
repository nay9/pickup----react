import React, { Component } from 'react'
import OpenOrder from './OpenOrder'

class AllOpenOrders extends Component {


  render() {

    return (
      <div>
        {this.props.allOpenOrders.map((openOrder) => 
          (
           
              <OpenOrder
                key={openOrder.id}
                openOrder={ openOrder }
                assignOrder = {this.props.assignOrder}
                />
                

          ))
        }
      </div>
    )
  }
}

export default AllOpenOrders;