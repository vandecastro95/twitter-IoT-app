import React from 'react';
import LandingPage from './pages/LandingPage'
import TwitterContextProvider from './contexts/TwitterContext'

function App() {
  return (
    <div className="App">
      <TwitterContextProvider>
        <LandingPage />
      </TwitterContextProvider>
    </div>
  );
}

export default App;
