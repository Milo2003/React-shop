import { useState } from "react"

const initialState = {
    cart: []
}
export const useInitialState = () => {
    const [shoppingCart, setShoppingCart] = useState(initialState);

    const addToShoppingCart = (payload) => {
        setShoppingCart({
            ...shoppingCart,
            cart: [...shoppingCart.cart, payload]
        })
    }

    const removeToCart = (payload) => {
        setShoppingCart({
            ...shoppingCart,
            cart: shoppingCart.cart.filter((items) => items.id !== payload.id),
        })
    }

    return {
        shoppingCart,
        addToShoppingCart,
        removeToCart,
    }
}