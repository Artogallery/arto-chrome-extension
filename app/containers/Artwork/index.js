import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


@connect(
  state => ({
  }),
  dispatch => ()
)
export default class Artwork extends Component {
  componentDidMount() {
    this.props.loadArtwork();
  }
  render() {
    return (
      <div>
        Hell World!
      </div>
    );
  }
}
