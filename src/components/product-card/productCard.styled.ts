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
