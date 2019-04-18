import React, { Component } from 'react'
import AllOpenOrdersUser from '../../PickupRequest/AllOpenOrdersUser';
import AllAcceptedOrderUser from '../../PickupRequest/AllAcceptedOrderUser';
import OrderForm from '../../OrderForm/OrderForm';
import './userview.css'
import Modal from '../../OrderForm/Modal';
import '../../OrderForm/Modal.css'

class User extends Component {

  
  render() {

    return (

      <React.Fragment>
        <section className="title__user">
        <h1>Submit An Order Here:</h1>
        
        <OrderForm
          orderForm={this.props.orderForm} 
          onSubmit={this.openModalHandler}
        />
        </section>


        <AllOpenOrdersUser
          allOpenOrdersUser={this.props.allOpenOrdersUser} 
        />
      
        <AllAcceptedOrderUser
          allAcceptedOrderUser={this.props.allAcceptedOrderUser}
          
        />

              <div>
                <button className="open-modal-btn" onClick={this.openModalHandler}>Order Status</button>
                <isShowing
                isShowing={this.props.isShowing}
                />
                       
                <Modal           
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                        Your order has been submitted.
                </Modal>
              </div>

      </React.Fragment>
        
    )
  }

  openModalHandler = () => {
    this.setState({
        isShowing: true
    });}
    closeModalHandler = () => {
      this.setState({
          isShowing: false
      });
  }
  


}

export default User