import { createContext, useState } from 'react'
import { cartContextType } from '@/interfaces/cartContext'

export const CartContext = createContext<cartContextType | null>(null)

type cartProviderProps = {
    children: React.ReactNode
}

const CartProvider = ({ children }: cartProviderProps) => {
    const [cartIds, setCartIds] = useState<number[]>([9])

    function handleCart(id: number) {
        const currentIds = [...cartIds]

        cartIds.includes(id) ? currentIds.splice(id, 1) : currentIds.push(id)

        setCartIds(currentIds)
    }

    return (
        <CartContext.Provider value={{ cartIds, handleCart }} >
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider
