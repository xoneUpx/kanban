import React from 'react';
import classnames from 'classnames';
import styles from '../note.module.css';

//const Edit = ({ onEdit = () => {}, value, ...props }) => (
//  <div onClick={ onEdit } { ...props }>  
//  <span>edit: { value } </span>
//  </div>
//)
class Edit extends React.Component {
  render () {
    const { className, value, onEdit, ...props } = this.props
    return (<input
      type = 'text'
      //className = { classnames('edit', className) }
      className={styles.notez}
      autoFocus = {true}
      defaultValue = { value }
      onBlur = { this.finishEdit }
      onKeyPress = { this.checkEnter }
      { ...props } />)
    }
  finishEdit = (e) => {
    const value = e.target.value
    if (this.props.onEdit) {
      this.props.onEdit(value)
      }
    }
  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e)
      }
    }
  }

export default ({ date, value, editing, onEdit, className, ...props }) => {
  if (editing) {
    return <Edit className = { className } value={ value } date = {date} onEdit={onEdit} { ...props } />
  }
  return (<div> <span className={ classnames('value', styles.note, className)  } { ...props }>{ value } </span>
    <h4> { date } </h4>
    </div>)
}
