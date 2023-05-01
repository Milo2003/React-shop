import { useState } from "react"

const initialState = {
    cart: []
}

const generateId = () => {
    return Math.random().toString(36).slice(2, 11);
};
export const useInitialState = () => {
    const [shoppingCart, setShoppingCart] = useState(initialState);

    const addToShoppingCart = (payload) => {
        setShoppingCart({
            ...shoppingCart,
            cart: [...shoppingCart.cart, {...payload, subId: generateId() }]
        })
    }
    const removeToCart = (payload) => {
        setShoppingCart({
            ...shoppingCart,
            cart: shoppingCart.cart.filter((items) => items.subId !== payload.subId)
        })
    }

    return {
        shoppingCart,
        addToShoppingCart,
        removeToCart,
    }
}