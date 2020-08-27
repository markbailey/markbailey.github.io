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
        // textTransform: 'uppercase',
        fontFamily: 'helvetica',
        textAlign: 'center',
      }}
    >
      <img src="/mb-logo.png" alt="My Logo" />
      <div style={{ marginTop: -26 }}>
        {/* -56 */}
        <h1 style={{ margin: 0, fontWeight: 400 }}>
          I'm <span style={{ color: '#F44336' }}>Mark Bailey</span>, a<br />
          <span style={{ color: '#F44336' }}>Javascript / React</span> developer
          <br />
          based in <span style={{ color: '#F44336' }}>Kent, UK</span>
        </h1>
      </div>
    </div>
  );
};

export default App;
