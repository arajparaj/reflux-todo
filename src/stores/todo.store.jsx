import Reflux from 'reflux';
import TODOActions from '../actions/todo.action';
import _ from 'lodash';

var TODOStore = Reflux.createStore({
  listenables: TODOActions,

  TODOList: [
    {
      key: 1,
      label: "label 1",
      isCompleted: false
    },
    {
      key: 2,
      label: "label 2",
      isCompleted: false
    },
    {
      key: 3,
      label: "label 3",
      isCompleted: false
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
  },
  onToggle(key){
    let index = _.findIndex(this.TODOList, ['key', key]);
    this.TODOList[index].isCompleted = !this.TODOList[index].isCompleted;
    this.trigger(this.TODOList);
  },
  onDestroy(key){
    _.remove(this.TODOList, ['key', key]);
    this.trigger(this.TODOList);
  },
  onSave(key,value){
    let index = _.findIndex(this.TODOList, ['key', key]);
    this.TODOList[index].label = value;
    this.trigger(this.TODOList);
  }

});

export default TODOStore;
