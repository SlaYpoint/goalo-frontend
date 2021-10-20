export const stateReducer = (state, {type, payload}) => {
    switch (type) {
      case "SET_PRODUCTS":
        return { ...state, products: payload };
      case "SORT":
        return { ...state, sortBy: payload };
      case "INCLUDE_OUT_OF_STOCK":
        return {
          ...state,
          filterBy: { ...state.filterBy, includeOutOfStock: payload },
        };
      case "FILTER_BY_CATEGORY":
        return state.filterBy.filterByCategory.includes(payload)
          ? {
              ...state,
              filterBy: {
                ...state.filterBy,
                filterByCategory: state.filterBy.filterByCategory.filter(
                  (item) => item !== payload
                ),
              },
            }
          : {
              ...state,
              filterBy: {
                ...state.filterBy,
                filterByCategory:
                  state.filterBy.filterByCategory.concat(payload),
              },
            };
      case "FILTER_BY_BRAND":
        return state.filterBy.filterByBrand.includes(payload)
          ? {
              ...state,
              filterBy: {
                ...state.filterBy,
                filterByBrand: state.filterBy.filterByBrand.filter(
                  (item) => item !== payload
                ),
              },
            }
          : {
              ...state,
              filterBy: {
                ...state.filterBy,
                filterByBrand:
                  state.filterBy.filterByBrand.concat(payload),
              },
            };
      default:
        return state;
    }
}