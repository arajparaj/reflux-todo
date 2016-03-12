import React, {PropTypes} from 'react'

class TODO extends React.Component {
  render() {
    return (
      <div>{this.props.item.key}</div>
    );
  }
}

export default TODO;
