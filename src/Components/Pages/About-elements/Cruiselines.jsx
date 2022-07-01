import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { displayElement } from "../../../Helper";
import cruise from "../../../Media/Icons/cruise.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const Cruiselines = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);
  const [cruiseLeft, setCruiseLeft] = useState(20);

  useEffect(() => {
    window.addEventListener("scroll", displayElement, { passive: true });
    return () =>
      window.removeEventListener("scroll", setDisplay(displayElement(400)));
  });

  useEffect(() => {
    const updateCruiseLeft = () => {
      const parent = document.getElementById("cruise-div");
      const scrollPercent = Math.min(
        1,
        (window.scrollY - 400) / parent.clientHeight
      );
      let left = scrollPercent * parent.clientWidth;
      left > 20 ? setCruiseLeft(left) : setCruiseLeft(20);
    };
    window.addEventListener("scroll", updateCruiseLeft, { passive: true });
    return () => window.removeEventListener("scroll", updateCruiseLeft);
  });

  return (
    <Box
      id="cruise-div"
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        height: "fit-content",
        pb: "240px",
        zIndex: display ? 99 : 0,
        opacity: display ? 100 : 0,
        transition: "all .5s ease-in-out",
        position: "relative",
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
          position: "absolute",
          // width: { xs: "120px", sm: "140px", md: "160px" },
          width: "140px",
          zIndex: -1,
          left: cruiseLeft,
        }}
      />
    </Box>
  );
};

export default Cruiselines;
