import Reflux from 'reflux';
import TODOActions from '../actions/todo.action';

var TODOStore = Reflux.createStore({
  listenables: TODOActions,

  onLoad(){
    console.log("started");
  }
  onLoadCompleted() {
    console.log("completed");
  }
  onLoadfailed() {
    console.log("failed");;
  }
});

export TODOStore;
