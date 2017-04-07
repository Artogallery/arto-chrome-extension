import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import Overlay from './Overlay';
import Clock from './Clock';
import BrandLogo from './BrandLogo';

const styles = StyleSheet.create({
  artwork: {
    minHeight: '100%',
    width: '100%',
    height: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    opacity: 0,
    transition: 'opacity .5s ease-in',
    visibility: 'hidden'
  },
  hidden: {
    display: 'none',
    visibility: 'hidden',
  },
  reveal: {
    opacity: 1,
    visibility: 'visible'
  },
  aside: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '20px',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.2) 33%, rgba(0,0,0,.4) 66%, rgba(0,0,0,.6) 99%)',
    color: '#fff',
    textShadow: '0 2px 2px rgba(0,0,0,.5)',
    opacity: 0,
    transition: 'opacity .5s linear'
  },
  paragraph: {
    color: '#b8b8b8',
    fontSize: '14px',
    fontWeight: 300,
  },
  title: {
    fontSize: '26px',
    fontWeight: 100,
    letterSpacing: '0px'
  },
});


class ArtworkImage extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  handleImageLoaded = () => {
    this.setState({ show: true });
  }

  render() {
    if (this.props.artwork) {
      const {
        title,
        artist_name,
        provider_name,
        artwork_url,
        artwork_profile_url,
        artwork_small_url,
        artist_profile_url,
        thumbnail_url,
        year
      } = this.props.artwork;

      return (
        <div>
          <img
            src={artwork_url}
            onLoad={this.handleImageLoaded}
            style={{ display: 'none', visibility: 'hidden' }}
            alt={title}
          />
          <main
            className={css(styles.artwork, this.state.show && styles.reveal)}
            style={{ backgroundImage: `url(${artwork_url})` }}
          />
          <Overlay />

          <BrandLogo url="http://arto.gallery" />

          <section className={css(styles.aside, this.state.show && styles.reveal)}>
            <h1 className={css(styles.title)}>
              <a
                className={css(styles.paragraph, styles.title)}
                href={artwork_profile_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title} {year && ` | ${year}`}
              </a>
            </h1>

            <p className={css(styles.artistName)}>
              <a
                className={css(styles.paragraph)}
                href={artist_profile_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {artist_name} | {provider_name}
              </a>
            </p>

            <p>
              <a
                className={css(styles.paragraph)}
                href="http://arto.gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
              ARTO Gallery
              </a>
            </p>

            <Clock />
          </section>
        </div>
      );
    }
    return null;
  }
}

ArtworkImage.defaultProps = {
  artwork: null,
  year: null
};

ArtworkImage.propTypes = {
  artwork: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artwork_url: PropTypes.string.isRequired,
    artwork_small_url: PropTypes.string.isRequired,
    thumbnail_url: PropTypes.string.isRequired,
    artwork_profile_url: PropTypes.string.isRequired,
    artist_profile_url: PropTypes.string.isRequired,
    artist_name: PropTypes.string.isRequired,
    provider_name: PropTypes.string.isRequired,
    year: PropTypes.number,
  })
};

export default ArtworkImage;
