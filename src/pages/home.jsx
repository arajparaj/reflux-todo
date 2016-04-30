import React, {PropTypes} from 'react';
import _ from 'lodash';

import TODOList from './todo.list.jsx';
import TODOActions from '../actions/todo.action';
import TODOStore from '../stores/todo.store';
import Footer from './todo.footer.jsx';
import Header from './todo.footer.jsx';

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
    let filteredList;
    switch (this.props.location.pathname) {
      case '/Completed':
        console.log('inside');
        filteredList = _.filter(this.state.TODOList, function(item) {
          return item.isCompleted;
        });
        break;
      case '/Active':
        filteredList = _.filter(this.state.TODOList, function(item) {
          return !item.isCompleted;
        });
        break;
      default:
        filteredList = this.state.TODOList;
    }
    console.log(filteredList);
    return (
      <div>
        <Header/>
        <TODOList TODOList={filteredList}/>
        <Footer list={this.state.TODOList}/>
      </div>
    );
  }
}

export default Home;
