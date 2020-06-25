import React from 'react';

const App = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
        color: '#fff',
        textTransform: 'uppercase',
        fontFamily: 'helvetica',
        textAlign: 'center',
      }}
    >
      <img src="/mb-logo.png" alt="My Logo" />
      <div style={{ marginTop: -56 }}>
        <h1 style={{ margin: 0 }}>Mark Bailey</h1>
        <small>Javascript / React Developer</small>
      </div>
    </div>
  );
};

export default App;
