import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextWrapper from './context/ContextWrapper';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
      <NotificationContainer/>
    </ContextWrapper>
  </React.StrictMode>
);
