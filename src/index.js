import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing global styles
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // Performance measurement
import { BrowserRouter } from "react-router-dom"; // React Router for routing
import ShopContextProvider from './context/ShopContext'; // Custom context provider for shop state
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-mjgpgfjvz8qji6m4.us.auth0.com"

const clientId = "nnI0sCO5A3jwdQ1hgk6pUIr5WXQynPJ9"
// Creating the root element for React to render into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the application
root.render(
  <BrowserRouter>
    <ShopContextProvider>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin + '/callback'}
      
      >
        <App /> 
      </Auth0Provider>
    </ShopContextProvider>
  </BrowserRouter>
);

// Measure performance in the app (optional)
reportWebVitals();