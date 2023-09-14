import React from "react";
import { Preview } from "@storybook/react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../src/themes";
import * as NextImage from "next/image";

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
`;

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        {/* <GlobalStyle> */}
        <Story />
        {/* </GlobalStyle> */}
      </ThemeProvider>
    ),
  ],
};

export default preview;
