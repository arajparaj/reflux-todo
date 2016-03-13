import Reflux from 'reflux';

var TODOActions = Reflux.createActions({
  "load": {
    children: ["completed", "failed"]
  },
  "toggle": {},
  "destroy": {},
  "save" : {},
});

export default TODOActions;
