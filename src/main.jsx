import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// locate root for react to render app at
const el = document.getElementById('root');

// create React root to control rendering into the DOM elemen
const root = ReactDOM.createRoot(el);

// injects react component tree into DOM
root.render(<App />);
