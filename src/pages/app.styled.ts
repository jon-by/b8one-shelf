import { COLORS } from "@/constants";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}

body{
    background-color: ${COLORS["shelf-bg"]};

}

`