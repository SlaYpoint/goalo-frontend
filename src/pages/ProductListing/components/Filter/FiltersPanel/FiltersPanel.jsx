import { categories, brands } from '../../../../../helpers';
import { useStateContext } from '../../../../../contexts';

import './FiltersPanel.css';

export const FiltersPanel = () => {
    const { state, dispatch } = useStateContext();

    return (
      <div className="side-panel">
        <div className="side-panel-heading">Filters</div>
        <ul className="list">
          <div className="list-heading">Category</div>
          {categories.map((category) => (
            <li key={category}>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={state.filterBy.filterByCategory.includes(category)}
                  onChange={() => {
                    dispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: category,
                    });
                  }}
                />
                {category}
              </label>
            </li>
          ))}
        </ul>
        <ul className="list">
          <div className="list-heading">Brand</div>
          {brands.map((brand) => (
            <li key={brand}>
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={state.filterBy.filterByBrand.includes(brand)}
                  onChange={() => {
                    dispatch({
                      type: "FILTER_BY_BRAND",
                      payload: brand,
                    });
                  }}
                />
                {brand}
              </label>
            </li>
          ))}
        </ul>
        <ul className="list">
           <div className="list-heading">Other</div>
            <li>
                <label htmlFor="">
                    <input
                        type="checkbox"
                        checked={state.filterBy.includeOutOfStock}
                        onChange={() => {
                                dispatch({
                                    type: "INCLUDE_OUT_OF_STOCK",
                                    payload: !state.filterBy.includeOutOfStock
                                });
                        }}
                    />
                    Include out of stock
                </label>
            </li>
        </ul>
      </div>
    );
    
}