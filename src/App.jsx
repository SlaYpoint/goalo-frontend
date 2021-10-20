import { useEffect } from 'react';
import { useStateContext } from './contexts';
import { getProducts } from './helpers';
import { Link, Route } from 'react-router-dom';

import { ProductListing } from "./pages";
import "./styles.css";

const Home = () => {
  return <h1>This is the Home Page</h1>;
}

function App() {
  const { dispatch } = useStateContext();

  useEffect(() => {
    getProducts(dispatch);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/products">Products</Link>
        </li>
      </ul>

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products">
        <ProductListing />
      </Route>
    </div>
  );
}

export default App;
