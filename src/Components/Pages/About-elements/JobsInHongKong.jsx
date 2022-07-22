import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import work from "../../../Media/Icons/work.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const JobsInHongKong = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const displayElement = () =>
      window.scrollY > 140 ? setDisplay(true) : setDisplay(false);

    window.addEventListener("scroll", displayElement, { passive: true });
    return () => window.removeEventListener("scroll", displayElement);
  });

  return (
    <Box
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        position: "relative",
        height: 200,
        zIndex: display ? 99 : 0,
        opacity: display ? 100 : 0,
        transition: "all .8s ease-in-out",
      }}
    >
      <Box
        sx={{
          background: "#3c3c3c",
          width: 15,
          height: 15,
          borderRadius: 50,
          position: "absolute",
          left: -10,
          top: -1,
        }}
      />
      <Box
        component="img"
        src={work}
        sx={{
          position: "absolute",
          width: { xs: 40, sm: 50, md: 60 },
          left: { xs: -75, sm: -85, md: -95 },
          mt: { xs: "-10px", sm: "-20px" },
        }}
      />

      <Typography variant="subtitle1" theme={theme}>
        2011 to 2019
      </Typography>
      <Typography
        variant="body1"
        theme={theme}
        sx={{
          width: { xs: "auto", sm: 250 },
          maxWidth: { xs: 200, sm: 250 },
          pt: ".2rem",
        }}
      >
        Gained my experience in administration, event management, marketing and
        management from several very interesting jobs
      </Typography>
    </Box>
  );
};

export default JobsInHongKong;
