import { createContext, useEffect, useState } from 'react'
import { cartContextType } from '@/interfaces/cartContext'

export const CartContext = createContext<cartContextType | null>(null)

type cartProviderProps = {
    children: React.ReactNode
}

const CartProvider = ({ children }: cartProviderProps) => {
    const [cartIds, setCartIds] = useState<number[]>([])
    const [wishListIds, setWishListIds] = useState<number[]>([])

    function handleCart(id: number) {
        const currentIds = [...cartIds]

        const index = currentIds.indexOf(id)

        index > -1 ? currentIds.splice(index, 1) : currentIds.push(id)

        setCartIds(currentIds)
    }

    function handleWishList(id: number) {
        const currentIds = [...wishListIds]

        const index = currentIds.indexOf(id)

        index > -1 ? currentIds.splice(index, 1) : currentIds.push(id)

        setWishListIds(currentIds)
    }

    return (
        <CartContext.Provider value={{ cartIds, handleCart, wishListIds, handleWishList }} >
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider
