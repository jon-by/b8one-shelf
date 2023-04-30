import { createContext, useState } from 'react'
import { shelfContextType } from '@/interfaces/shelfContext'

export const ShelfContext = createContext<shelfContextType | null>(null)

type cartProviderProps = {
    children: React.ReactNode
}

const ShelfProvider = ({ children }: cartProviderProps) => {
    const [cartIds, setCartIds] = useState<number[]>([])
    const [wishListIds, setWishListIds] = useState<number[]>([])

    function addOrRemoveCartItens(id: number) {
        const currentIds = [...cartIds]

        const index = currentIds.indexOf(id)

        index > -1 ? currentIds.splice(index, 1) : currentIds.push(id)

        setCartIds(currentIds)
    }

    function addOrRemoveWishListItens(id: number) {
        const currentIds = [...wishListIds]

        const index = currentIds.indexOf(id)

        index > -1 ? currentIds.splice(index, 1) : currentIds.push(id)

        setWishListIds(currentIds)
    }

    return (
        <ShelfContext.Provider value={{ cartIds, addOrRemoveCartItens, wishListIds, addOrRemoveWishListItens }} >
            {children}
        </ShelfContext.Provider>
    )
}


export default ShelfProvider
