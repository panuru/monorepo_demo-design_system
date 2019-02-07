import { createGlobalStyle } from 'styled-components';

const CssReset = createGlobalStyle`
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body, html {
        margin: 0;
        font-size: 14px;
        line-height: 1rem;
        font-family: FenomenSans-Book, Arial, Helvetica, "Helvetica Neue", sans-serif;
    }
    h1, h2, h3, h4, h5, h6, p, blockquote, figure, ol, ul, span {
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
        font-weight: normal;
    }
    table {
        border-spacing: 0;
        border-collapse: collapse;
    }
    th, td {
        text-align: left;
        vertical-align: top;
    }
    main,li {
        display: block;
    }
    dl {
      margin-top: 0;
      margin-bottom: 0;
    }
    dd {
      margin-left: 0;
    }
    sup {
      top: -.5em;
      position: relative;
      font-size: 75%;
      line-height: 0;
      vertical-align: baseline;
    }
    strong {
      font-weight: bold;
    }
    figure {
      margin: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button {
        font: inherit;
        cursor: pointer;
        border: 0;
        margin: 0;
        padding: 0;
        overflow: visible;
        background: none;
        text-align: inherit;
        text-transform: inherit;
        letter-spacing: inherit;
        -webkit-font-smoothing: inherit;
    }
    ::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
    :focus {
        outline: 0;
    }
    img {
        height: auto;
        border: 0;
        max-width: 100%;
        vertical-align: middle;
    }
    iframe {
        border: 0;
    }

    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

`;

export default CssReset;
