import React, { Component } from 'react'
import AcceptedOrderUser from './AcceptedOrderUser'

export class AllAcceptedOrdersUser extends Component {
  render() {
    return (
        <div>
          {this.props.allAcceptedOrdersUser.map((acceptedOrderUser) => 
            (
            
                <AcceptedOrderUser
                  key={acceptedOrderUser.id}
                  acceptedOrderUser={ acceptedOrderUser }
                  markComplete = {this.props.markComplete}
                />
             
  
            ))
          }
        </div>
      )   
      
  }
}

export default AllAcceptedOrdersUser
