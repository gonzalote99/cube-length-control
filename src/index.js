import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom'

import App from './App';

const root = createRoot(document.getElementById('app'));

ReactDOM.render(
  
    <App />, document.getElementById('app')
  
);
