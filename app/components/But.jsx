import React from 'react';

const Button = class Button extends React.Component {
  render() {
    return (<button type="button" name="lol" >^^</button>)
  }
}
const Button2 = class Button extends React.Component {
  render() {
    //unpacking
    const { ...props } = this.props
    return (<button type="button" >{this.props.name}+{ this.props.name2 }</button>)
  }
}
function Button3(props) {
  return <h1>{props.toString()} {{...props}.toString()}</h1>;
}
const Button4 = ({...props})=> { return (<p>{props.name}</p>)};
export { Button, Button2, Button3, Button4 };
