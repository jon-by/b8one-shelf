import { COLORS } from "@/constants";
import styled from "styled-components";

type wishListContainerProps = {
  inWishList: boolean;
};

export const WishListContainer = styled.div<wishListContainerProps>`
  position: absolute;
  width: 48px;
  height: 48px;
  background-color: ${({ inWishList }) =>
    inWishList ? COLORS["wish-List-bg-added"] : COLORS["wish-list-default"]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  svg {
    path {
      fill: ${({ inWishList }) =>
        inWishList ? COLORS.white : COLORS["wish-list-default"]};
      stroke: ${({ inWishList }) =>
        inWishList ? COLORS.white : COLORS["wish-list-stroke-default"]};
    }
  }

  &:hover {
    background-color: ${({ inWishList }) =>
      inWishList
        ? COLORS["wish-list-path-added-hover"]
        : COLORS["wish-List-bg-hover"]};
    svg {
      path {
        stroke: ${({ inWishList }) =>
          inWishList ? COLORS.white : COLORS["wish-list-path-hover"]};
      }
    }
  }
`;
