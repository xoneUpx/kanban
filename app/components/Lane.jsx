import React from 'react';

export default (props) => ( <div>{props.lane} lanes
<ul>{props.notes.map((lane) => <li key={lane.id}> <h1>{lane.task}</h1></li> )}</ul>
  </div>);
