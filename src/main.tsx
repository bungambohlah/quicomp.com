import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/circle.css';
import { App } from '~/components/root/App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
