import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ weight: ["500", "600", "700"], subsets: ["latin"] });

import ProductCard from "../product-card/ProductCard";
import Loader from "../loader/Loader";

import { ShelfWrapper } from "./shelf.styled";
import { SHELFS_URL } from "@/constants";


import { parsedProducts, product } from "../../interfaces/product";

const Shelf = () => {
    const [products, setProducts] = useState<product[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    async function getProducts() {
        try {
            setIsLoading(true);

            const rawProducts = await fetch(SHELFS_URL.electronics);
            const parsedProducts: parsedProducts = await rawProducts.json();
            setProducts(parsedProducts.products);

            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ShelfWrapper className={inter.className}>
            {!isLoading ? (
                products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    );
                })
            ) : (
                <Loader />
            )}
        </ShelfWrapper>
    );
};

export default Shelf;
