import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

export const useProductData = () => {
    return useContext(ProductsContext);
}