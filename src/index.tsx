import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import { FeatureFlagsProvider } from './providers/feature-flags-provider';

const renderApp = async () => {
  ReactDOM.render(
    <React.StrictMode>
      <FeatureFlagsProvider>
        <App />
      </FeatureFlagsProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

renderApp();
