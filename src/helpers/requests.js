import axios from "axios";


export const getProducts = async ( dispatch ) => {
    try {
        const {
          data: { products },
          status,
        } = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/products`,
        });

        if (status === 200 || status === 201)
            dispatch({ type: 'SET_PRODUCTS', payload: products });
        else
            throw new Error('Request failure : failed to GET products');
    } catch (err) {
        console.log(err);
    }
}