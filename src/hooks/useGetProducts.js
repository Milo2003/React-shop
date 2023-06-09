import axios from "axios";
import { useEffect, useState } from "react";

export const useGetProducts = (API) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios(API);
            setProducts(response.data)
        }
        fetchData()
    }, []);
    
    return products;
}