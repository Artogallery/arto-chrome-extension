import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  overlay: {
    minHeight: '100%',
    width: '100%',
    height: 'auto',
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    zIndex: '20',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, .25) 0, transparent 20%, transparent 60%, rgba(0, 0, 0, .3))'
  }
});

const Overlay = () =>
  <div
    className={css(styles.overlay)}
  />;

export default Overlay;
