import { createTheme } from "@mui/material";
import { createContext, useContext } from "react";

export const ThemeContext = createContext({});

const ThemeProvider = (props) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Cabin", "Cabin Condensed", "Cabin Sketch"].join(","),
    },
  });

  theme.typography.h4 = {
    fontFamily: "Cabin Sketch",
    fontSize: "2.5rem",
    textTransform: "uppercase",
    color: "#3c3c3c",
  };

  theme.typography.h6 = {
    fontFamily: "Cabin Sketch",
    fontSize: "1.6rem",
    color: "#3c3c3c",
  };

  theme.typography.subtitle1 = {
    fontFamily: "Cabin",
    fontSize: "1.2rem",
    color: "#3c3c3c",
  };

  theme.typography.body1 = {
    fontFamily: "Cabin",
    fontSize: "1rem",
    color: "#3c3c3c",
  };

  theme.typography.body2 = {
    fontFamily: "Cabin",
    fontWeight: "400",
    fontSize: ".9rem",
    color: "#3c3c3c",
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export const useTheme = () => useContext(ThemeContext);
