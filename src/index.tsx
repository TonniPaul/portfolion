import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';

import App from './App';

import './styles/index.css';
import './styles/vars.css';
import './styles/app.css';
import './styles/common.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <BrowserRouter>
      <App />
      <SpeedInsights />
    </BrowserRouter>
  </>
);
