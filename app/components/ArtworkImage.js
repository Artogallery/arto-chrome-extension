import React, { Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

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
  time: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: '20px',
    color: '#b8b8b8',
    fontSize: '84px'
  },
  paragraph: {
    color: '#b8b8b8',
    fontSize: '14px',
    fontWeight: 300,
  },
  title: {
    fontSize: '30px',
    fontWeight: 100,
  },
  artistName: {
  },
  hidden: {
    display: 'none'
  },
});


class ArtworkImage extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), show: false };
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

  handleImageLoaded = () => {
    console.log('image loaded');
    this.setState({ show: true });
  }

  render() {
    if (this.props.artwork) {
      const {
        title,
        artist_name,
        provider_name,
        artwork_url,
        artwork_small_url,
        thumbnail_url
      } = this.props.artwork;

      return (
        <div>
          <img
            src={artwork_url}
            onLoad={this.handleImageLoaded}
            style={{ display: 'none', visibility: 'hidden' }}
          />
          <main
            className={css(styles.artwork, this.state.show && styles.reveal)}
            style={{ backgroundImage: `url(${artwork_url})` }}
          />
          <section className={css(styles.aside, this.state.show && styles.reveal)}>
            <h1 className={css(styles.title)}>{title}</h1>
            <p className={css(styles.paragraph, styles.artistName)}>{artist_name} | {provider_name}</p>
            <p>
              <a className={css(styles.paragraph)} href="http://arto.gallery">ARTO Gallery</a>
            </p>
            <h1 className={css(styles.title, styles.time)}>
              {this.state.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </h1>
          </section>
        </div>
      );
    }
    return null;
  }
}

ArtworkImage.defaultProps = {
  artwork: null
};

ArtworkImage.propTypes = {
  artwork: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artwork_url: PropTypes.string.isRequired,
    artist_name: PropTypes.string.isRequired,
    provider_name: PropTypes.string.isRequired,
  }),
  isFetching: PropTypes.bool.isRequired,
};

export default ArtworkImage;
