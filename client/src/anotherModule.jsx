import React, { Component } from 'react';
import _ from 'lodash';
export default class another extends Component {
  render() {
    return (
      <div>
        {_.join(['Another','module','loaded!'],' ')}
      </div>
    );
  }
}
