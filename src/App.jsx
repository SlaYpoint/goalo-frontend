import './styles.css';
import { Products } from './pages';
import { Link, Route } from 'react-router-dom';

const Home = () => {
  return <h1>This is the Home Page</h1>;
}

function App() {
  
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
        <Products />
      </Route>
    </div>
  );
}

export default App;
