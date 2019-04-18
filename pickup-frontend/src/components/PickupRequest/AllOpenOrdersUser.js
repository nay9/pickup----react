import React, { Component } from 'react'
import OpenOrderUser from './OpenOrderUser'

class AllOpenOrdersUser extends Component {
  render() {

    return (
      <div>
        {this.props.allOpenOrdersUser.map((openOrderUser) => 
          (
           
              <OpenOrderUser
                key={openOrderUser.id}
                openOrderUser={ openOrderUser }
                assignOrder = {this.props.assignOrder}
                />
                

          ))
        }
      </div>
    )
  }
}

export default AllOpenOrdersUser;