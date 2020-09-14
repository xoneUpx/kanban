import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../actions/action_index";
import uuid from 'node-uuid';

function mapDispatchToProps(dispatch) {
  return {
    addNote2: note => dispatch(addNote(note))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      id: uuid.v4()
    };
  }

  handleChange = (event)=> {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (event)=> {
    event.preventDefault();
    const { task } = this.state;
    this.props.addNote2({ id: uuid.v4(),task });
    this.setState({ task: "" });
  }
  render() {
    const { task } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="task"
            value={task}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
