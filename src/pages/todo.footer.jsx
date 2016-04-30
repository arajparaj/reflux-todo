import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import classNames from 'classnames';
import TODOActions from '../actions/todo.action';

class Footer extends React.Component {
  render() {
    var nbrcompleted = _.filter(this.props.list, "isComplete").length,
      nbrtotal = this.props.list.length,
      nbrincomplete = nbrtotal - nbrcompleted,
      clearButtonClass = classNames({
        hidden: nbrcompleted < 1
      }),
      footerClass = classNames({
        hidden: !nbrtotal
      }),
      completedLabel = "Clear completed (" + nbrcompleted + ")",
      itemsLeftLabel = nbrincomplete === 1
        ? " item left"
        : " items left";
    return (
      <footer id="footer" className={footerClass}>
        <span id="todo-count">
          <strong>{nbrincomplete}</strong>{itemsLeftLabel}</span>
        <ul id="filters">
          <li>
            <Link activeClassName="selected" to="/All">All</Link>
          </li>
          <li>
            <Link activeClassName="selected" to="/Active">Active</Link>
          </li>
          <li>
            <Link activeClassName="selected" to="/Completed">Completed</Link>
          </li>
        </ul>
        <button id="clear-completed" className={clearButtonClass} onClick={TODOActions.clearCompleted}>{completedLabel}</button>
      </footer>
    );
  }
}
Footer.PropTypes = {
  list: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
}
Footer.defaultProps = {
  list: []
}
export default Footer;
