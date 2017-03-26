import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ArtworkImage from '../../components/ArtworkImage';
import * as ArtworkActions from './actions';

@connect(
  state => ({
    artwork: state.artwork,
  }),
  dispatch => bindActionCreators(ArtworkActions, dispatch)
)

export default class Artwork extends Component {
  static propTypes = {
    fetchArtwork: PropTypes.func,
    artwork: PropTypes.object,
    isFetching: PropTypes.bool,
  }

  componentDidMount() {
    this.props.fetchArtwork();
  }
  render() {
    const { artwork, isFetching } = this.props.artwork;
    return (
      <ArtworkImage artwork={artwork} isFetching={isFetching} />
    );
  }
}
