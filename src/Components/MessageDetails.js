import React from "react";
import { useParams } from "react-router-dom";

function Child({messageObj}) {
  let { subjectID } = useParams();

  // let splitter=subjectID.split(' ')

  // let messageHolder=[messageObj];
  // console.log(messageHolder)

  // let exactMessage=messageHolder.filter(item =>item.subject.includes(splitter[0]))


  return (
    <div>
      <h3>Your Message Details: {subjectID}</h3>
    </div>
  );
}

export default Child