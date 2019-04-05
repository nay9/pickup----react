import React, { Component } from "react";
import './orderform.css'

class OrderForm extends Component {
  state = {
    locationStart: "",
    locationEnd: "",
    time: "",
    description: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.orderForm(
      this.state.locationStart,
      this.state.locationEnd,
      this.state.time,
      this.state.description
    );

    this.setState({
      locationStart: "",
      locationEnd: "",
      time: "",
      description: ""
    });
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
            type="text"
            name="time"
            placeholder="When?"
            value={this.state.time}
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
            className="btn form-btn"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default OrderForm;
