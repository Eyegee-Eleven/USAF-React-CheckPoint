import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, useRouteMatch } from "react-router-dom";
import MessageDetails from './MessageDetails'
import Child from './MessageDetails'


 function Messages({messageObj}){



  const emailMessages=messageObj.map(item=> {return `Subject: ${item.subject} \n From: ${item.sender}`})

  return(
    

    <div>
      <h1>Your Email Messages</h1>
      <ul>
        <Router>
            {emailMessages.map(item =><li><Link to={item}>{item}</Link></li>)}
          <Switch>
            <Route path={`/:subjectID`} children={<Child info={messageObj} />}></Route>
          </Switch>
        </Router>
      </ul>
    </div>
  )
}


export default Messages