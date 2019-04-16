import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { throws } from 'assert';
 
class UserCalendar extends Component {
    constructor(props) {
        super(props);
            this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(date) {

  };
 
  render() {
    return (
      <div>
        <Calendar
          selected={this.props}
          onChange={(date) => this.props.setDate(date) }
        />
      </div>
    );
  
  }
}

export default UserCalendar