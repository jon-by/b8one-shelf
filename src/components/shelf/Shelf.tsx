import React, { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ weight: ["500", "700"], subsets: ['latin'] })

import { product } from "../../interfaces/product"

import { ShelfWrapper } from './shelf.styled'
import { SHELFS_URL } from '@/constants'
import Loader from '../loader/Loader'

const Shelf = () => {
    const [products, setProducts] = useState<product[]>([])
    const [isLoading, setIsLoading] = useState(true)

     function getProducts() {
        try {
            setIsLoading(true)
            setTimeout(async()=>{
                const rawProducts = await fetch(SHELFS_URL.electronics)
                const parsedProducts: product[] = await rawProducts.json()
                setProducts(parsedProducts)    
                setIsLoading(false)

            },2000)
        } catch (error) {
            console.error(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return isLoading ? <Loader /> :
        (
            <ShelfWrapper className={inter.className}>
huehue
            </ShelfWrapper>
        )
}

export default Shelf