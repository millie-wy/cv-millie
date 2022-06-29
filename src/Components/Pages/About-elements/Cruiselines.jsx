import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { displayElement } from "../../../Helper";
import cruise from "../../../Media/Icons/cruise.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const Cruiselines = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", displayElement, { passive: true });
    return () =>
      window.removeEventListener("scroll", setDisplay(displayElement(405)));
  });

  return (
    <Box
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        height: "fit-content",
        pb: "100px",
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
        }}
      >
        Through my jobs at two cruiselines, I got the chance to...
      </Typography>
      <Box
        component="img"
        src={cruise}
        sx={{
          // position: "absolute",
          width: { xs: "120px", sm: "140px", md: "160px" },
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default Cruiselines;
