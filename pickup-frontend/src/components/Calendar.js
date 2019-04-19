import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { throws } from 'assert';
import './calendar.css'
 
class UserCalendar extends Component {
    constructor(props) {
        super(props);
            this.handleChange = this.handleChange.bind(this)
  }
 
  handleChange(date) {

  };
 
  render() {
    return (
        <Calendar
          className = { 'calendar' }
          selected={this.props}
          onChange={(date) => this.props.setDate(date) }
        />
    );
  
  }
}

export default UserCalendar