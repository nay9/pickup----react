import React, { Component } from "react";
import './orderform.css'
import UserCalendar from '../Calendar.js'
import './Modal.js'


class OrderForm extends Component {
  state = {
    locationStart: "",
    locationEnd: "",
    date: "",
    time: "",
    description: "",
    img: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.orderForm(
      this.state.locationStart,
      this.state.locationEnd,
      this.state.date,
      this.state.time,
      this.state.description,
      this.state.img
      );


    this.setState({
      locationStart: "",
      locationEnd: "",
      date: "",
      time: "",
      description: "",
      img: ""
    });
  };

  setDate = (date) => {
      this.setState({ date });
  };



  render() {
    // destructure this.state.
    return (
      <div className="order-form-container">
        
        <form className="order-form" onSubmit={this.onSubmit}>
        <h2>Submit An Order Here:</h2>
          <input
            className="form-item"
            type="text"
            name="locationStart"
            placeholder="Where is item now?"
            value={this.state.locationStart}
            onChange={this.onChange}
          />
          <input
            className="form-item"
            type="text"
            name="locationEnd"
            placeholder="Where are we going?"
            value={this.state.locationEnd}
            onChange={this.onChange}
          />
          <input
            className="form-item"
            type="textarea"
            name="description"
            placeholder="Details..."
            value={this.state.description}
            onChange={this.onChange}
          />
           <input
            className="form-item"
            type="textarea"
            name="img"
            placeholder="Upload image"
            value={this.state.img}
            onChange={this.onChange}
          />
          <input
            className="form-item"
            type="text"
            name="time"
            placeholder="When?"
            value={this.state.time}
            onChange={this.onChange}
          />
              <UserCalendar 
                setDate={this.setDate}
                value={this.state.date}
                handleChange={this.handleChange}
              />
          <input
            className="btn-form"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
    
  
  }
}

export default OrderForm;
