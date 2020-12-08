import React from "react";
import { useParams } from "react-router-dom";

function Child({messageObj}) {
  let { subjectID } = useParams();

  // let splitter=subjectID.split(' ')

  // let messageHolder=[messageObj];
  // console.log(messageHolder)

  // let exactMessage=messageHolder.filter(item =>item.subject.includes(splitter[0]))

  //my problem here is that the way I was creating the links on the other component (messages) I could not figure out how to gain access to the response details I wanted while also
  //creating the links/ list items in the way that I wanted. Which meant that all I could reach when I did it this way was the subject and sender combined in a string
  //this hurt me when i got to this point becuase that lack of information made it hard to filter the response and then display jsut that message.

  return (
    <div>
      <h3>Your Message Details: {subjectID}</h3>
    </div>
  );
}

export default Child