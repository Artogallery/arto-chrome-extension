import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  clock: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: '20px',
    color: '#b8b8b8',
    fontSize: '42px',
    fontWeight: 100
  }
});

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  componentWillMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <h1 className={css(styles.clock)}>
        {this.state.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </h1>
    );
  }
}

export default Clock;
