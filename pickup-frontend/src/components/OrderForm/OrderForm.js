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
      <div className="card">

        <form className="order-form" onSubmit={this.onSubmit}>
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
          <div className="calendar">
              <UserCalendar 
              setDate={this.setDate}
              value={this.state.date}
              handleChange={this.handleChange}
              />

          </div>
          <div id = "btnM">
          <input
            className="form-btn"
            id="btn"
            type="submit"
            value="Submit"
          />
          </div>
        </form>
      </div>
    );
    
  
  }
}

export default OrderForm;
