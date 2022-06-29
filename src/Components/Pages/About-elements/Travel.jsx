import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { displayElement } from "../../../Helper";
import flight from "../../../Media/Icons/flight.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const Travel = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", displayElement, { passive: true });
    return () =>
      window.removeEventListener("scroll", setDisplay(displayElement(723)));
  });

  return (
    <Box
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        height: "fit-content",
        pb: "100px",
        display: "flex",
        flexWrap: "wrap",
        zIndex: display ? 99 : 0,
        opacity: display ? 100 : 0,
        transition: "all .5s ease-in-out",
      }}
    >
      <Typography
        variant="body1"
        theme={theme}
        sx={{
          width: { xs: "auto", sm: "250px" },
          maxWidth: { xs: "200px", sm: "250px" },
          pr: ".5rem",
        }}
      >
        And travel around to get to know how amazing this world is!
      </Typography>
      <Box
        component="img"
        src={flight}
        sx={{
          width: "60px",
          pt: { xs: ".5rem", sm: 0 },
        }}
      />
    </Box>
  );
};

export default Travel;
