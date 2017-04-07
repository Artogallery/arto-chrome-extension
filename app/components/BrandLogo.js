import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import logo from './artologo.png';

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    left: 0,
    top: 0,
    padding: '20px',
    height: '24px',
    zIndex: '21'
  }
});

const BrandLogo = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      className={css(styles.logo)}
      src={logo}
      alt="ARTO Gallery Logo"
    />
  </a>
);

export default BrandLogo;
