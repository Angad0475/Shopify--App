import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing global styles
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // Performance measurement
import { BrowserRouter } from "react-router-dom"; // React Router for routing
import ShopContextProvider from './context/ShopContext'; // Custom context provider for shop state
import { Auth0Provider } from '@auth0/auth0-react';

// Creating the root element for React to render into
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the application
root.render(
  
  <BrowserRouter>
    <ShopContextProvider>
    <Auth0Provider
    domain="dev-mjgpgfjvz8qji6m4.us.auth0.com"
    clientId="nnI0sCO5A3jwdQ1hgk6pUIr5WXQynPJ9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
 
        <App /> 
    </Auth0Provider>
    </ShopContextProvider>  
  </BrowserRouter>
  
);

// Measure performance in the app (optional)
reportWebVitals();
