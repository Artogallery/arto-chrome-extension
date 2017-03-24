import React, { Component } from 'react';
import { connect } from 'react-redux';

import Artwork from '../Artwork';

@connect(
  state => ({
  })
)
export default class App extends Component {
  render() {
    return (
      <Artwork />
    );
  }
}
