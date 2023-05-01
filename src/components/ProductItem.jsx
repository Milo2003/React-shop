import React, { useContext } from 'react';

import '../style/productItem.scss';
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';
import { AppContext } from '../context/AppContext';

export const ProductItem = ({ product }) => {
    const { addToShoppingCart } = useContext(AppContext);

    const handleCart = (item) => {
        addToShoppingCart(item);
    }
    return (
        <div className="productItem">
            <img
                src={product.images[0]}
                alt="image of product"
            />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                </div>
                <figure className='add-to-cart' onClick={() => handleCart(product)}>
                    <img src={addToCartImage} alt="añadir al carrito" />
                </figure>
            </div>
        </div>
    )
}
