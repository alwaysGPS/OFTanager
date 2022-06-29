import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600&display=swap');

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Noto Sans', sans-serif;
        overflow-y: hidden;
    }
`;

export default GlobalStyles;
