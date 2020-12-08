import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from "react-router-dom";

class SendEmail extends Component{
  constructor(props) {
    super(props);
    this.state = {
      composeEmail:{
        sender:'',
        recipient:'',
        subject:'',
        message:''}
      };
  }
  mySubmitHandler = () => {
    fetch('http://localhost:3001/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.composeEmail),
    })
    .then(promise => promise.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })

    console.log()
  }
  myChangeHandler = (event) => {
    this.setState({composeEmail:{
      sender:'checkpoint@sdi.com',
      recipient:'placeholder',
      subject: event.target.value,
      message:'placeholder',
      date:'placeholder',
      id:'900'}
    });
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>Submit Email</h1>
      <p>Enter your subject, and submit:</p>
      <p>From: checkpoint@sdi.com</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
        value={this.state.message}
      />
      <input
        type='submit'
      />
      </form>
    );
  }
}










export default SendEmail