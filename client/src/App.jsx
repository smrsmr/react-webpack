import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import _ from 'lodash';
import Another from './anotherModule.jsx';
class App extends Component {
  render() {
    return (
      <div>
        <h1>{_.join(['Vue', 'React', 'Angular'], '~')}</h1>
        <Another />
      </div>
    );
  }
}

export default hot(module)(App);

