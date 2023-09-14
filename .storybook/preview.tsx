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

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) =>
    typeof props.src === "string" ? (
      <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
    ) : (
      <OriginalNextImage {...props} unoptimized />
    ),
});

export default preview;
