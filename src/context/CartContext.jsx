import {useState, useEffect, createContext, useContext} from 'react';

const cartContext = createContext();

export const { Provider } = cartContext;

export const useCartContext = () => {
    return useContext(cartContext);
}

const CartContextProvider =({children}) =>{
    const [qty, setQty] = useState(0);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        const localCart = JSON.parse(localStorage.getItem('cart'))
        const localTotal = JSON.parse(localStorage.getItem('total'))
        const localQty = JSON.parse(localStorage.getItem('cant'))
        if(localCart && localTotal && localQty){
            setCart(localCart)
            setTotal(localTotal)
            setQty(localQty)
        }
    },[])

    const isInCart = (id) => {
        return cart.find((elem)=>elem.id === id)
    }

    const addToCart = (product, cant) => {
        let newCart = [];

        if(isInCart(product.id)){
            newCart = cart.map((elem) =>{
                if(elem.id === product.id){
                    return {...elem, cant: elem.cant + cant}
                }else{
                    return elem
                }
            })
        }else{
            newCart = [...cart, {...product, cant}]
        }


        setQty(qty => {
            const newQty = qty + cant;
            localStorage.setItem('cant', JSON.stringify(newQty)); 
            return newQty;
        });

        setTotal(total => {
            const newTotal = total + (product.price * cant);
            localStorage.setItem('total', JSON.stringify(newTotal)); 
            return newTotal;
        });

        setCart(cart => {
            localStorage.setItem('cart', JSON.stringify(newCart)); 
            return newCart;
        });
    }

    const removeItem = (id, price, cant) => {
        let newTotal = total - price * qty;
        let newQty = qty - cant;

        setTotal(newTotal);
        setQty(newQty);

        const newCart = cart.filter((elem) => elem.id !== id);
        setCart(newCart);

        localStorage.setItem('cart', JSON.stringify(newCart)); 
        localStorage.setItem('total', JSON.stringify(newTotal)); 
        localStorage.setItem('cant', JSON.stringify(newQty)); 
    }

    const clearCart = () => {
        setQty(0)
        setCart([])
        setTotal(0)
        localStorage.removeItem('cart')
        localStorage.removeItem('total')
        localStorage.removeItem('cant')
    }

    const contextValue = {
        qty,
        total,
        cart,
        addToCart,
        removeItem,
        clearCart,
    }

    return <Provider value={contextValue}>{children}</Provider>
}

export default CartContextProvider;