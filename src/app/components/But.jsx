import React, { useState, useEffect } from 'react';
//import Buttonb from 'react-bootstrap/Button';

import Buttonb from 'react-bootstrap/Button';


const Button = class Button extends React.Component {
  render() {
    return (<button type="button" name="lol" >^^</button>)
  }
}
const Button2 = class Button extends React.Component {
  render() {
    //unpacking
    const { name, name2, ...other } = this.props
    return (<button type="button"   >{this.props.name}+{ name2 }|{other.name3}</button>)
  }
}
function Button3(props) { return (<div>{Button33(props)} <Button33 /></div>);};
function Button33({ props, ...other}) {
  //props is udefined?
  const [ thistate, setstate ] = useState(0);
  useEffect(() => { alert(`it is mounted + ${thistate}` ); return () => { alert('change!')}}, [thistate]);
  return <div><button type='radio' onClick={()=> { setstate(thistate + 1)}}><h1>but3 {props}{name}{ other.name2} number: { thistate }</h1></button><Buttonb variant="warning" size="lg" >LOLI</Buttonb></div>;
}
const Button4 = ({name, children})=> { return (<p>{name}but4
  {{children}.toString()}</p>)};
const Button5 = ( {name, name2}) => { return (<p>{name}+{name2}</p>)};

const DelBut = ({ delFunction,  name}) =>  {return (<div><button style={{ 'fontSize': '11px', color: 'red', height: '40px', width: '80px'}} className={name} onClick={delFunction}>{name}</button></div>)};
export { Button, Button2, Button3, Button4, Button5, DelBut };
