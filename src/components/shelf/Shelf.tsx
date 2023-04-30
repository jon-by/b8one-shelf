import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
const inter = Inter({ weight: ["500", "600", "700"], subsets: ["latin"] });

import ProductCard from "../product-card/ProductCard";
import Loader from "../loader/Loader";

import { ShelfWrapper } from "./shelf.styled";
import { SHELFS_URL } from "@/constants";

import { parsedProducts, product } from "../../interfaces/product";

const Shelf = () => {
  const [products, setProducts] = useState<product[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getProducts() {
    try {
      setIsLoading(true);

      const rawProducts = await fetch(SHELFS_URL.electronics);
      const parsedProducts: parsedProducts = await rawProducts.json();
      setProducts(parsedProducts.products);

      setIsLoading(false);
    } catch (error) {
      setError(true);
      console.error(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const ShelfRender = () => {
    switch (true) {
      case error:
        return (
          <ShelfWrapper className={inter.className}>
            <h2>Oops! Algo deu errado, por favor, tente novamente. </h2>
          </ShelfWrapper>
        );
      case isLoading:
        return (
          <ShelfWrapper className={inter.className}>
            <Loader />
          </ShelfWrapper>
        );

      case typeof products !== null && products!.length < 1:
        return (
          <ShelfWrapper className={inter.className}>
            <h2>Oops! Não encontramos produtos </h2>
          </ShelfWrapper>
        );

      default:
        return (
          <ShelfWrapper className={inter.className}>
            {products !== null &&
              products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </ShelfWrapper>
        );
    }
  };

  return <ShelfRender />;
};

export default Shelf;
