import React from 'react';
import LandingPage from './pages/LandingPage'
import TwitterContextProvider from './contexts/TwitterContext'

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh'}}>
      <TwitterContextProvider>
        <LandingPage />
      </TwitterContextProvider>
    </div>
  );
}

export default App;
