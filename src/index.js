import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { StateProvider } from './contexts';

ReactDOM.render(
  <StrictMode>
    <StateProvider>
      <Router>
        <App />
      </Router>
    </StateProvider>
  </StrictMode>,
  document.getElementById("root")
);

