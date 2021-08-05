import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import {
  ProductsProvider
} from './contexts/ProductsContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <Router>
        <App />
      </Router>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

