import React from 'react'
//import CSSModules from 'react-css-modules'

//export default (props) => (<div>
//  <span>{ props.task }</span>
//  <button onClick = {props.onDelete}>X</button> 
//  </div>)
export default ({ children, ...props }) => (
  <div { ...props } >
    { children }
  <h2 id="lol">lol</h2>
  </div>
  )
