import React, { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ weight: ["500", "600", "700"], subsets: ['latin'] })

import { parsedProducts, product } from "../../interfaces/product"

import { ShelfWrapper } from './shelf.styled'
import { SHELFS_URL } from '@/constants'
import Loader from '../loader/Loader'
import ProductCard from '../product-card/ProductCard'

const Shelf = () => {
    const [products, setProducts] = useState<product[]>([])
    const [isLoading, setIsLoading] = useState(false)

    async function getProducts() {
        try {
            setIsLoading(true)

            const rawProducts = await fetch(SHELFS_URL.electronics)
            const parsedProducts: parsedProducts = await rawProducts.json()
            setProducts(parsedProducts.products)

            setIsLoading(false)
        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <ShelfWrapper className={inter.className}>
            {!isLoading ? (
                products.map(product => {
                    return <ProductCard product={product} />
                })
            ) : <Loader />}
        </ShelfWrapper>
    )
}

export default Shelf