import React, {PropTypes} from 'react'

class TODO extends React.Component {
  handleToggle(){
    console.log('toglle');
  }
  handleEditStart(){
    console.log('edit');
  }
  handleDestroy(){
    console.log('destroy');
  }
  handleBlur(){
    console.log('onblur');
  }
  handleValueChange(){
    console.log('valuechange');
  }
  render() {
    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" checked={!!this.props.item.isComplete} onChange={this.handleToggle}/>
          <label onDoubleClick={this.handleEditStart}>{this.props.item.label}</label>
          <button className="destroy" onClick={this.handleDestroy}></button>
        </div>
      </li>
    );
  }
}

export default TODO;
