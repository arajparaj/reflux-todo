import React, {PropTypes} from 'react';
import classNames from 'classnames';

import TODOActions from '../actions/todo.action';

class TODO extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isEditing: false
    }
  }

  handleToggle() {
    TODOActions.toggle(this.props.item.key);
  }
  handleEditStart() {
    this.setState({isEditing: true});
  }
  handleDestroy() {
    TODOActions.destroy(this.props.item.key);
  }
  handleBlur() {
    this.setState({isEditing: false});
  }
  handleValueChange(event) {
    TODOActions.save(this.props.item.key, event.target.value);
  }

  render() {
    return (
      <li className={classNames({
        'completed': this.props.item.isCompleted
      }, {'editing': this.state.isEditing})}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={this.props.item.isCompleted} onChange={this.handleToggle.bind(this)}/>
          <label onDoubleClick={this.handleEditStart.bind(this)}>{this.props.item.label}</label>
          <button className="destroy" onClick={this.handleDestroy.bind(this)}></button>
        </div>
        <input ref="editInput" className="edit" onChange={this.handleValueChange.bind(this)} value={this.props.item.label} onBlur={this.handleBlur.bind(this)}/>
      </li>
    );
  }
}

export default TODO;
