import { useStateContext } from '../../../../contexts';
import { getSortedData, getFilteredData } from '../../../../helpers';

import { ProductCard } from '../../../../components';
import "./Products.css";

export const Products = () => { 
  const { state } = useStateContext();
  const sortedData = getSortedData(state, state.products);
  const filteredData = getFilteredData(state, sortedData);

  return (
    <div className="products">
      {filteredData.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
};
