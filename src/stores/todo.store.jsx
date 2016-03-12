import Reflux from 'reflux';
import TODOActions from '../actions/todo.action';

var TODOStore = Reflux.createStore({
  listenables: TODOActions,

  TODOList: [
    {
      key: 1,
      label: "nothing"
    },
    {
      key: 2,
      label: "nothing"
    },
    {
      key: 3,
      label: "nothing"
    }
  ],

  onLoad() {
    console.log("started");
    this.trigger(this.TODOList);
  },
  onLoadCompleted() {
    console.log("completed");
  },
  onLoadfailed() {
    console.log("failed");;
  }
});

export default TODOStore;
