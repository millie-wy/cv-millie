import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import work from "../../../Media/Icons/work.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const JobsInHongKong = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const displayElement = () => {
      window.scrollY > 137.5 ? setDisplay(true) : setDisplay(false);
    };
    window.addEventListener("scroll", displayElement, { passive: true });
    return () => window.removeEventListener("scroll", displayElement);
  });

  return (
    <Box
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        position: "relative",
        height: "fit-content",
        pb: "100px",
        zIndex: display ? 99 : 0,
        opacity: display ? 100 : 0,
        transition: "all .8s ease-in-out",
      }}
    >
      <Box
        sx={{
          background: "#3c3c3c",
          width: "15px",
          height: "15px",
          borderRadius: "50px",
          position: "absolute",
          left: "-10px",
          top: "-1px",
        }}
      />
      <Box
        component="img"
        src={work}
        sx={{
          position: "absolute",
          width: { xs: "40px", sm: "50px", md: "60px" },
          left: { xs: "-75px", sm: "-85px", md: "-95px" },
          top: "-0px",
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
          width: { xs: "auto", sm: "250px" },
          maxWidth: { xs: "200px", sm: "250px" },
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
