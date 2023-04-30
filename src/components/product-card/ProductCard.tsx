import { useContext } from 'react';
import { ShelfContext } from '@/context/ShelfContext'

import { CheckMark } from "@/icons";
import { toBRL } from "@/utils";

import { product } from "@/interfaces/product";
import { shelfContextType } from '@/interfaces/shelfContext';
import {
    CardContainer,
    ImageWrapper,
    Title,
    PriceWrapper,
    ListPrice,
    SellingPrice,
    InstallmentMessage,
    AddButton,
} from "./productCard.styled";
import WishList from '../wish-list/WishList';


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

            <PriceWrapper>
                <ListPrice>{toBRL(listPrice)}</ListPrice>
                <SellingPrice>{toBRL(sellingPrice)}</SellingPrice>
                <InstallmentMessage>
                    em até{" "}
                    <strong>
                        {maxInstallments}x de {toBRL(fowardprice)}
                    </strong>{" "}
                    {sellingPrice === fowardprice && "sem juros"}
                </InstallmentMessage>
            </PriceWrapper>

            <AddButton onClick={handleAddOrRemoveButton} isIncart={isInCart}>
                {isInCart ? (<><CheckMark /> Adicionado</>) : "Adicionar"}
            </AddButton>

        </CardContainer>
    );
};

export default ProductCard;
