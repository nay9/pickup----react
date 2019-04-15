import React, { Component } from 'react'
import AcceptedOrderUser from './AcceptedOrderUser'

export class AllAcceptedOrderUser extends Component {
  render() {
    return (
        <div>
          {this.props.allAcceptedOrderUser.map((acceptedOrderUser) => 
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

export default AllAcceptedOrderUser
