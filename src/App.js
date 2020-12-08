import './App.css';
import { Component } from 'react';
import Messages from '../src/Components/Messages'
import SendEmail from '../src/Components/SendEmail'


class App extends Component{
  constructor(){
    super()
    this.state={
      emails:[]
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/emails",{
      mode:'cors'
    })
    .then(promise => promise.json())
    .then(data =>{
      this.setState({emails:data})
    })
  }

  render(){
  return (
    <>
     <Messages messageObj = { this.state.emails } />
     <SendEmail/>
    </>
   

  )};
}

export default App;
