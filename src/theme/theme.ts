import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

// Mobile-first breakpoints (MUI is mobile-first by default; we keep defaults)
const theme = createTheme({
  palette: {
    primary: {
      main: "#0f1724", // adjust to brand
      contrastText: "#fff",
    },
    secondary: {
      main: "#7B61FF",
      dark: '#DCE1E6'
    },
    background: {
      default: "#F6F8FA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#0f1724",
      secondary: "#556270",
    },
    info: {
      main: "#fff",
    },
    success: {
      main: "#2A56FF",
      dark: "#2E7D32",
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "1.75rem",
      fontWeight: 800,
      lineHeight: 1.2,
      "@media (min-width:600px)": {
        lineHeight: 1.05,
      },
    }, // adjust scale
    h2: {
      fontSize: "1.25rem",
      fontWeight: 700,
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h3: { fontSize: "1.25rem", fontWeight: 700 },
    h4: { fontSize: "1.125rem", fontWeight: 700 },
    h5: { fontSize: "1rem", fontWeight: 700 },
    body1: {
      fontSize: "0.85rem",
      lineHeight: 1.4,
      "@media (min-width:600px)": {
        fontSize: "1rem",
        lineHeight: 1.6,
      },
    },
    body2: {
      fontSize: "0.825rem",
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: "0.75rem",
      lineHeight: 1.2,
    },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: false },
      styleOverrides: {
        root: { borderRadius: 6, textTransform: "none", padding: "10px 16px" },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 12 },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: { borderRadius: 10, overflow: "hidden" },
      },
    },
  },
});

export default theme;
