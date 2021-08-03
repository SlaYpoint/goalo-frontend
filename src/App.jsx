import './styles.css';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useProductData } from './hooks/useProductData';
import { ProductCard } from './components/ProductCard/ProductCard';

function App() {
  const [loading, setLoading] = useState(false);
  const { products, setProducts } = useProductData();
  
  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/products`
      );
      setProducts(res.data.products);
      setLoading(false);
    })();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    );
  } 
  return (
    <div className="App">
      <h1>This is the Home Page</h1>
      <div className="product__list">
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default App;
