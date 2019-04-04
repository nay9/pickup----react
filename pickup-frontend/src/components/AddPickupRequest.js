import React, { Component } from "react";

class AddPickupRequest extends Component {
  state = {
    locationStart: "",
    locationEnd: "",
    time: "",
    description: ""
  };

  
  onSubmit = event => {
    console.log(this.state);
    event.preventDefault();
    this.props.addPickupRequest(this.state);
    this.setState({
      locationStart: "",
      locationEnd: "",
      time: "",
      description: ""
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
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
          type="text"
          name="description"
          placeholder="Details..."
          value={this.state.description}
          onChange={this.onChange}
        />
        <input
          className="btn form-btn"
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
      </div>
      
    );
  }
}

export default AddPickupRequest;
