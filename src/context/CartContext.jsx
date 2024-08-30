import {useState, useEffect, createContext, useContext} from 'react';

const cartContext = createContext();

export const { Provider } = cartContext;

export const useCartContext = () => {
    return useContext(cartContext);
}

const CartContextProvider =({children}) =>{
    const [qty, setQty] = useState(0);

    const contextValue = {
        qty,
        setQty,
    }

    return <Provider value={contextValue}>{children}</Provider>
}

export default CartContextProvider;