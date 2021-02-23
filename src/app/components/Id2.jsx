import React from 'react';
import { Link, withRouter } from 'react-router-dom';
//export default (props)=> { console.log(props); return (<div>id2<Link to={`${props.match.url}/:id2`}>link 11</Link></div>)}
export default (props)=> { console.log(props); return (<div>id2|<Link to='/id'>link id</Link>
  <button onClick={()=> props.history.push('/id')}>idid</button>
  <button onClick={()=> props.history.push(`/${props.link}`)}>idid2</button>
  </div>);};
