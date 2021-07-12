import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const Reset = createGlobalStyle`

${normalize}

*,
*::before,
*::after{
    box-sizing: border-box;
    margin : 0;
    padding : 0;
}

h1{
    margin : 0;
}

body{
    font-family: 'Nunito Sans', sans-serif;
    background : ${({ theme }) => theme.background};
    color : ${({ theme }) => theme.text};
    font-size : 14px;
}

html,body{
    height : 100%;
}

ul{
    list-style-type : none;
}

a{
    text-decoration : none;
}


`;

export default Reset;
