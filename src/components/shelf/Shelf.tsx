import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '@/context/CartContext'

import { Inter } from 'next/font/google'
const inter = Inter({ weight: ["500", "600", "700"], subsets: ['latin'] })

import ProductCard from '../product-card/ProductCard'
import Loader from '../loader/Loader'

import { ShelfWrapper } from './shelf.styled'
import { SHELFS_URL } from '@/constants'

import { cartContextType } from '@/interfaces/cartContext'
import { parsedProducts, product } from "../../interfaces/product"

const Shelf = () => {

    const { cartIds } = useContext(CartContext) as cartContextType
    const [products, setProducts] = useState<product[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [cart, setcart] = useState<number[]>([])

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
                    return <ProductCard isIncart={cartIds.includes(product.id)} key={product.id} product={product} />
                })
            ) : <Loader />}
        </ShelfWrapper>
    )
}

export default Shelf