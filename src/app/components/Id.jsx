import React from 'react';
import { Link, withRouter } from 'react-router-dom';
export default withRouter((props)=> {  console.log(props, props.history); return (<div>id | <Link to={`${props.match.url}/id2`}>link id2</Link></div>)})

