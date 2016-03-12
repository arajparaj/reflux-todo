import React, {Component} from 'react';
import {Route, RouteContext, Link} from 'react-router';

export default class Layout extends Component {
  // mixins: [ Router.State ]
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
