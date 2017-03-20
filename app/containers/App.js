import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from './App.css';

@connect(
  state => ({
  })
)
export default class App extends Component {

  render() {
    return (
      <div className={style.normal}>
        Hello World!
      </div>
    );
  }
}
