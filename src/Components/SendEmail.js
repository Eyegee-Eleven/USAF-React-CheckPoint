import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from "react-router-dom";

const error="Sad Face, your put request failed lol"

 class SendEmail extends Component{
constructor(){
  super()
  this.state={
    value:''
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.postEmail.bind(this);
}

handleChange(event) {
  this.setState({value: event.target.value});
}

postEmail(){
  fetch('http://localhost:3001/emailse', {
  method: 'PUT', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(this.state.value),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

alert('A email was sent: ' + this.state.value);
}

render(){
  return(

    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Compose Email
          From:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          Subject:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          Body
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
}

export default SendEmail