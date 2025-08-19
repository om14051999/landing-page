import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#ff4081" },
    background: { default: "#fff" },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h2: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    body1: { lineHeight: 1.6 },
  },
});

export default theme;
