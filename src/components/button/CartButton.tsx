import React from 'react'
import { ButtonWrapper } from './cartButton.styled';

type buttonProps = {
    children: React.ReactNode;
    icon?: React.ReactNode;
    onClick: () => void;
    isInCart:boolean
}

const CartButton = ({ children, icon = null, onClick, isInCart }: buttonProps) => {
    return (
        <ButtonWrapper isIncart={isInCart} onClick={onClick}>
            {isInCart && icon && icon}
            {children}
        </ButtonWrapper>
    )
}

export default CartButton