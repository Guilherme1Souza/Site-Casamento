import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
       font-family: 'Segoe UI', sans-serif;
    }
a {
        text-decoration: none;
        color: inherit;
    }

    button, a {
        cursor: pointer;

    }
`;