import { COLORS } from "@/constants";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body{
    background-color: ${COLORS["shelf-bg"]};
    padding: 16px;
}

`