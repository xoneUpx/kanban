import React from 'react';
import uuid from 'node-uuid';
import Notes from './Notes.jsx';
import { Button, Button2, Button3, Button4 } from './But.jsx'
//import Note from './Note.jsx';
//const App =() =>(<div><Notes2 /></div>);
//export default App;
export default class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      notes : [
        {
          id: uuid.v4(),
          task: 'babelrc issues? ',
          date: new Date().toString()
        }
      ]
    }
  }
  //componentDidMount to set state form external source?
  render () {
//    const notes = this.state.notes;
    const name2="loli";
    return (
      <div>
        <button className = "add-note" onClick = {this.addNote}>+</button> 
        <Notes notes = { this.state.notes } onDelete = { this.deleteNote } onNoteClick= { this.activateNoteEdit } onEdit={ this.editNote } />
       <Button />
      <Button2 name="lol3" name2={name2} />
      <Button3 name={"lol3"} />
      <Button4 name="lol3" />
      </div>
    )
  }
  //componentWillMount() {
  //  this.addNote = this.addNote.bind(this);
  //}
  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'a new 1',
        date: new Date().toString()
      }])
    })

  }
  deleteNote = (id, e) => {
    e.stopPropagation()
    this.setState({
      notes: this.state.notes.filter(
        note => note.id !== id 
    )
    })
  }
  activateNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map(
        note => {
        if (note.id === id) {
          note.editing = true
        }
        return note
        }) 
  })  
  }
  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(
        note => {
        if (note.id === id) {
          note.editing = false
          note.task = task
          note.date = new Date().toString()
        }
        return note
        }) 
  })  
  }
}

