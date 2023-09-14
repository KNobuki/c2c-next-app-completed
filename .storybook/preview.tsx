import React from "react";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/themes";
import * as NextImage from "next/image";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
