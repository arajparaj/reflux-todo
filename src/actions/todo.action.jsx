import Reflux from 'reflux';

var TODOActions = Reflux.createActions({
  "load": {
    children: ["completed", "failed"]
  }
});

export default TODOActions;
