import React, { PropTypes } from 'react';

const ArtworkImage = ({ title, artwork_url, artist_name, provider_name }) => (
  <div>
    <h1>{title} by {artist_name} in {provider_name}</h1>
    <img src={artwork_url} alt={title} title={title} />
  </div>
);

ArtworkImage.defaultProps = {
  title: '',
  artwork_url: '',
  artist_name: '',
  provider_name: ''
};

ArtworkImage.propTypes = {
  title: PropTypes.string.isRequired,
  artwork_url: PropTypes.string.isRequired,
  artist_name: PropTypes.string.isRequired,
  provider_name: PropTypes.string.isRequired
};

export default ArtworkImage;
