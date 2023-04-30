import React, { useContext } from 'react'

import { CartContext } from '@/context/CartContext'
import { cartContextType } from '@/interfaces/cartContext';

import { WishListIcon } from '@/icons'
import { WishListContainer } from './wishList.styled'

type wishListprops = {
    id: number
}

const WishList = ({ id }: wishListprops) => {

    const { wishListIds, handleWishList } = useContext(CartContext) as cartContextType;
    return (
        <WishListContainer onClick={()=> handleWishList(id)} inWishList={wishListIds.includes(id)}>
            <WishListIcon />
        </WishListContainer>
    )
}

export default WishList