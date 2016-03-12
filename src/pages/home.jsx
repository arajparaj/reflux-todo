import React, {PropTypes} from 'react';
import TODOList from './todo.list.jsx';
import TODOActions from '../actions/todo.action';
import TODOStore from '../stores/todo.store';

class Home extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      TODOList: []
    }
    TODOActions.load();
  }
  onStatusChange(status) {
    this.setState({TODOList: status});
  }
  componentDidMount() {
    this.unsubscribe = TODOStore.listen(this.onStatusChange.bind(this));
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (<TODOList TODOList={this.state.TODOList}/>);
  }
}

export default Home;
