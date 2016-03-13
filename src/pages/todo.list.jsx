import React, {PropTypes} from 'react';
import TODO from './todo.jsx';

class TODOList extends React.Component {
  render() {
    let list = this.props.TODOList.map((item, index) => <TODO key={index} item={item}/>);
    return (
      <section id="main">
        <ul id="todo-list">
          {list}
        </ul>
      </section>
    );
  }
}

export default TODOList;
