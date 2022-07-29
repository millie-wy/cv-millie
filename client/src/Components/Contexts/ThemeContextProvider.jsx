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
    fontSize: "1.5rem",
    color: "#3c3c3c",
  };

  theme.typography.subtitle1 = {
    fontFamily: "Cabin",
    fontSize: "1rem",
    color: "#3c3c3c",
  };

  theme.typography.subtitle2 = {
    fontFamily: "Cabin",
    fontSize: "1rem",
    color: "#3c3c3c",
  };

  theme.typography.body1 = {
    fontFamily: "Cabin",
    fontSize: ".9rem",
    color: "#3c3c3c",
  };

  theme.typography.body2 = {
    fontFamily: "Cabin",
    fontSize: ".8rem",
    color: "#3c3c3c",
  };

  theme.typography.overline = {
    fontFamily: "Cabin",
    fontSize: ".7rem",
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
