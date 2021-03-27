import React from 'react';
import './App.css';
import WebSocketProvider from './websocket/WebSocketProvider';

function App() {
  return (
    <div className="App">
      <WebSocketProvider>
      </WebSocketProvider>
    </div>
  );
}

export default App;
