import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#F2F5FA",
      },
      //font style (Inter)
      fonts: {
        heading: `'Inter', sans-serif`,
        body: `'Inter', sans-serif`,
      },
    },
  },
});
