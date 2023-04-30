import React, { useContext } from 'react'

import { ShelfContext } from '@/context/ShelfContext'
import { shelfContextType } from '@/interfaces/shelfContext';

import { WishListIcon } from '@/icons'
import { WishListContainer } from './wishList.styled'

type wishListprops = {
    id: number
}

const WishList = ({ id }: wishListprops) => {

    const { wishListIds, addOrRemoveWishListItens } = useContext(ShelfContext) as shelfContextType;

    function handleWishListClick(){
        addOrRemoveWishListItens(id)
    }
    
    return (
        <WishListContainer onClick={handleWishListClick} inWishList={wishListIds.includes(id)}>
            <WishListIcon />
        </WishListContainer>
    )
}

export default WishList