import { createContext, useReducer, useContext } from "react";

import { stateReducer } from "./state-reducer";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
    
    const initialState = {
        products: [],
        sortBy: 'PRICE: HIGH TO LOW',
        filterBy: {
            includeOutOfStock: true,
            filterByCategory: [],
            filterByBrand: [],
        }
    }

    const [state, dispatch] = useReducer(stateReducer, initialState);
    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);