import { Products, SortByDropDown, FiltersPanel } from './components';

import './ProductListing.css';

export const ProductListing = () => {
    return (
        <div className="products-container">
            <FiltersPanel/>
            <SortByDropDown/>
            <Products />
        </div>
    );
}