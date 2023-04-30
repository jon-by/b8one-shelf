import { COLORS } from "@/constants";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 304px;
  height: 568px;
  background-color: ${COLORS["card-bg"]};
  border-radius: 8px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
  padding: 32px;
`;

export const ImageWrapper = styled.div`
  width: 240px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    object-fit: contain;
  }
`;


export const Title = styled.p`
  width: 240px;
  height: 60px;
  font-weight: 500;
  font-size: 14px;
  margin-top: 32px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ListPrice = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS["price-light"]};
  text-decoration: line-through;
  margin-top: 24px;
`;

export const SellingPrice = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${COLORS["selling-price"]};
`;

export const InstallmentMessage = styled.p`
  font-size: 12px;
  color: ${COLORS["price-light"]};
  font-weight: 500;

  strong {
    color: ${COLORS["font-default"]};
  }
`;

type addButtonProps = {
  isIncart: boolean;
};
export const AddButton = styled.button<addButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 240px;
  height: 48px;
  margin-top: 32px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 5px;
  background-color: ${({ isIncart }) =>isIncart ? COLORS["buy-button-added"] : COLORS["buy-button"]};    
  color: ${({isIncart})=> isIncart? COLORS["font-default"]: COLORS.white };
  text-transform: uppercase;
  cursor:${({isIncart})=> isIncart? "default":"pointer"};
  transition: background-color 200ms ease-in-out;
  pointer-events: ${({isIncart}) => isIncart? "none" : "all"};
  &:hover {
    background-color: ${({isIncart})=> isIncart? "none": COLORS["buy-button-hover"]};
  }
`;
