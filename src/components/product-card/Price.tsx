import React from "react";

import { toBRL } from "@/utils";

import {
    InstallmentMessage,
    ListPrice,
    PriceWrapper,
    SellingPrice,
} from "./price.styled";

type priceProps = {
    listPrice: number;
    sellingPrice: number;
    fowardprice: number;
    maxInstallments: number;
};

const Price = ({ fowardprice, listPrice, maxInstallments, sellingPrice }: priceProps) => {
    return (
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
    );
};

export default Price;
