export const getSortedData = (state, data) => {
  if (state.sortBy === "PRICE: LOW TO HIGH")
    return data.sort(
      (product1, product2) => product1.discountPrice - product2.discountPrice
    );
  else if (state.sortBy === "PRICE: HIGH TO LOW")
    return data.sort(
      (product1, product2) => product2.discountPrice - product1.discountPrice
    );
};

export const getFilteredData = (state, data) =>{
  let newData = [...data];
  if (!state.filterBy.includeOutOfStock)
    newData = newData.filter(product => product.inStock);
  else if (state.filterBy.filterByCategory.length !== 0)
    newData = newData.filter(product => state.filterBy.filterByCategory.includes(product.category));
  else if (state.filterBy.filterByBrand.length !== 0)
    newData = newData.filter(product => state.filterBy.filterByBrand.includes(product.brandName));
  return newData;
}