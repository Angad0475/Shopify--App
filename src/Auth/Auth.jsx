import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from '../App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-mjgpgfjvz8qji6m4.us.auth0.com"
    clientId="wIBxdefCgJ1dVlDIS4dbMLl535SE5H32"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
