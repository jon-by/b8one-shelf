import styled from "styled-components"
import { COLORS } from "@/constants";


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