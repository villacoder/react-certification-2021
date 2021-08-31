import React from 'react';
import App from './components/App/App.component';
import AppProvider  from './providers/App/AppProvider';

export const Principal = () => {
 
  return (
    <div>
      <AppProvider>
        <App />
      </AppProvider>
    </div>
  );
};
