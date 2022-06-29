import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import busy from "../../../Media/Icons/busy.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const NotJustAboutWork = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const displayElement = () => {
      window.scrollY > 283 ? setDisplay(true) : setDisplay(false);
    };
    window.addEventListener("scroll", displayElement, { passive: true });
    return () => window.removeEventListener("scroll", displayElement);
  });

  return (
    <Box
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        height: "fit-content",
        pb: "100px",
        flexWrap: "wrap",
        display: "flex",
        zIndex: display ? 99 : 0,
        opacity: display ? 100 : 0,
        transition: "all .5s ease-in-out",
      }}
    >
      <Typography
        variant="subtitle1"
        theme={theme}
        sx={{
          width: { xs: "auto", sm: "250px" },
          maxWidth: { xs: "200px", sm: "250px" },
          pr: ".5rem",
        }}
      >
        But my work life was not just about working...
      </Typography>
      <Box
        component="img"
        src={busy}
        sx={{
          width: "60px",
          pt: { xs: ".5rem", sm: 0 },
        }}
      />
    </Box>
  );
};

export default NotJustAboutWork;
