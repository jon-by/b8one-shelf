import styled from "styled-components";

import { COLORS } from "../../constants/index";

type addButtonProps = {
  isIncart: boolean;
};

export const ButtonWrapper = styled.button<addButtonProps>`
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
  background-color: ${({ isIncart }) =>
    isIncart ? COLORS["buy-button-added"] : COLORS["buy-button"]};
  color: ${({ isIncart }) =>
    isIncart ? COLORS["font-default"] : COLORS.white};
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;
  &:hover {
    background-color: ${({ isIncart }) =>
      isIncart ? "none" : COLORS["buy-button-hover"]};
  }
`;
