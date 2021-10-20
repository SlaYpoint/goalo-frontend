import { Products, SortByDropDown, FiltersPanel } from './components';

export const ProductListing = () => {
    return (
        <>
            <FiltersPanel/>
            <SortByDropDown/>
            <Products />
        </>
    );
}