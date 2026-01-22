import { createTheme } from "@mui/material/styles";

const fontStack = [
  '"Manrope"',
  "system-ui",
  "-apple-system",
  '"Segoe UI"',
  "sans-serif",
].join(", ");

const displayStack = [
  '"Bricolage Grotesque"',
  '"Manrope"',
  "system-ui",
  "-apple-system",
  '"Segoe UI"',
  "sans-serif",
].join(", ");

const theme = createTheme({
  typography: {
    fontFamily: fontStack,
    display: {
      fontFamily: displayStack,
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
  },
});

export default theme;
