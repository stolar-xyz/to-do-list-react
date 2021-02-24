import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        min-height: 100%;
        background: ${({ theme }) => theme.colors.mainBackground};
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
    }
`;