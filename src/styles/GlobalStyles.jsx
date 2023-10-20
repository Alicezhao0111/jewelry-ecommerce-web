import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    font-family: 'Belleza', sans-serif;
    overflow-x: hidden;
    background-color: #F3F0ED;
}
html{
    height: 100%;
}
h1,h2,h3{
    font-family: 'Gilda Display', serif;
    margin:0;
    padding:0;
}
h4,h5,h6{
    font-family: 'Noto Sans TC', sans-serif;
    margin:0;
    padding:0;
}
a{
    color:inherit;
    text-decoration: none;
}
`

export default GlobalStyles;