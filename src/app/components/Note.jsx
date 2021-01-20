import React from 'react'
import { useDrag } from 'react-dnd';
//import CSSModules from 'react-css-modules'
import style from '../note.module.scss';

//export default (props) => (<div>
//  <span>{ props.task }</span>
//  <button onClick = {props.onDelete}>X</button> 
//  </div>)
//  mapping props to children React.Child React.Child 
export default ({ children, ...props }) => { const [{isDragging}, drag] = useDrag({item: { id: props.id, type: 'Note'}, collect: (monitor, item) => ({ isDragging: !!monitor.isDragging(),})}); return (
 <div className={style.notez} ref={drag} style= {{ opacity: isDragging?0.2:1}} { ...props } >
    { children }
  </div>
  )};
