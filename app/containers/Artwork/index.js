import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ArtworkImage from '../../components/ArtworkImage';
import * as ArtworkActions from './actions';

class Artwork extends Component {
  static propTypes = {
    fetchArtwork: PropTypes.func,
    artwork: PropTypes.object,
    isFetching: PropTypes.bool,
  }
  componentDidMount() {
    this.props.fetchArtwork();
  }
  render() {
    console.log('container', this.props, this.props.artwork);
    const { artwork, isFetching } = this.props.artwork;
    console.log(artwork, isFetching);
    if (this.props.artwork) {
      return (
        <ArtworkImage artwork={artwork} isFetching={isFetching} />
      );
    }
    return null;
  }
}


function mapStateToProps(state) {
  return {
    artwork: state.artwork
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ArtworkActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Artwork);
