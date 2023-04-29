import { useContext } from 'react';
import { CartContext } from '@/context/CartContext'

import { CheckMark } from "@/icons";
import { toBRL } from "@/utils";

import { product } from "@/interfaces/product";
import { cartContextType } from '@/interfaces/cartContext';
import {
    CardContainer,
    ImageWrapper,
    WishListContainer,
    Title,
    PriceWrapper,
    ListPrice,
    SellingPrice,
    InstallmentMessage,
    AddButton,
} from "./productCard.styled";


type productcardProps = {
    product: product;
    isIncart: boolean
};

const ProductCard = ({ product, isIncart = false }: productcardProps) => {
    const { handleCart } = useContext(CartContext) as cartContextType
    const {
        id,
        image,
        title,
        listPrice,
        sellingPrice,
        installmentsOptions: { fowardprice, maxInstallments },
    } = product;

    return (
        <CardContainer>
            <ImageWrapper>
                <img src={image} width={240} height={240} alt={title} />
                <WishListContainer />
            </ImageWrapper>

            <Title>{title}</Title>

            <PriceWrapper>
                <ListPrice>{toBRL(listPrice)}</ListPrice>
                <SellingPrice>{toBRL(sellingPrice)}</SellingPrice>
                <InstallmentMessage>
                    em até
                    <strong>
                        {maxInstallments}x de {toBRL(fowardprice)}
                    </strong>{" "}
                    {sellingPrice === fowardprice && "sem juros"}
                </InstallmentMessage>
            </PriceWrapper>

            <AddButton onClick={() => handleCart(id)} isIncart={isIncart}>
                {isIncart ? (<><CheckMark /> Adicionado</>) : "Adicionar"}
            </AddButton>

        </CardContainer>
    );
};

export default ProductCard;
