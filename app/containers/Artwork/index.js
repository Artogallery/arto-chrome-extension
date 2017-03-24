import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/* @connect(
 *   state => ({
 *   })
 * )*/
class Artwork extends Component {
  render() {
    return (
      <div>
        Hell World!
      </div>
    );
  }
}

export default connect(null)(Artwork);
