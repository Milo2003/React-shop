import React, { useEffect, useState } from 'react';

import '../style/main.scss';
import { ProductItem } from '../components/ProductItem';
import { useGetProducts } from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';
export const Main = () => {
    const products = useGetProducts(API)
    return (
        <section className="main-container">
            <div className="cards-container">
                {products.map(product => (<ProductItem key={product.id} product={product}/>))}
            </div>
        </section>
    )
}
