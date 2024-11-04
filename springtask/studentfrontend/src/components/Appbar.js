import React from 'react';

const styles = {
  appbar: {
    backgroundColor: '#1976d2',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: '20px',
    cursor: 'pointer',
    fontSize: '20px',
  },
  title: {
    flexGrow: 1,
    fontSize: '20px',
  },
};

export default function Appbar() {
  return (
    <div style={styles.appbar}>
      <span style={styles.menuButton} aria-label="menu">
        &#9776; {/* This is a Unicode character for a simple menu icon */}
      </span>
      <span style={styles.title}>
        Spring Boot React Full Stack Application
      </span>
    </div>
  );
}
