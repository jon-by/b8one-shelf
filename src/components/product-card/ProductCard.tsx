import { useContext } from 'react';
import { ShelfContext } from '@/context/ShelfContext'

import { CheckMark } from "@/icons";
import { toBRL } from "@/utils";
import WishList from '../wish-list/WishList';

import { product } from "@/interfaces/product";
import { shelfContextType } from '@/interfaces/shelfContext';
import {
    CardContainer,
    ImageWrapper,
    Title
} from "./productCard.styled";
import Price from './Price';
import CartButton from '../button/CartButton';

type productcardProps = {
    product: product;
};

const ProductCard = ({ product }: productcardProps) => {
    const { addOrRemoveCartItens, cartIds } = useContext(ShelfContext) as shelfContextType
    const {
        id,
        image,
        title,
        listPrice,
        sellingPrice,
        installmentsOptions: { fowardprice, maxInstallments },
    } = product;

    const isInCart = cartIds.includes(id)

    function handleAddOrRemoveButton() {
        addOrRemoveCartItens(id)
    }

    return (
        <CardContainer>
            <ImageWrapper>
                <img src={image} width={240} height={240} alt={title} />
                <WishList id={id} />
            </ImageWrapper>

            <Title>{title}</Title>

            <Price {...{ listPrice, sellingPrice, fowardprice, maxInstallments }} />

            <CartButton icon={<CheckMark />} isInCart={isInCart} onClick={handleAddOrRemoveButton}>
                {isInCart ? "Adicionado" : "Adicionar"}
            </CartButton>

        </CardContainer>
    );
};

export default ProductCard;
