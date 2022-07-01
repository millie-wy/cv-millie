import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { displayElement } from "../../../Helper";
import hongkong from "../../../Media/Icons/hongkong.png";
import moving from "../../../Media/Icons/moving.png";
import sweden from "../../../Media/Icons/sweden.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const Move = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);
  const [truckRight, setTruckRight] = useState(40);

  useEffect(() => {
    window.addEventListener("scroll", displayElement, { passive: true });
    return () =>
      window.removeEventListener("scroll", setDisplay(displayElement(834)));
  });

  useEffect(() => {
    // not done
    const updateCruiseLeft = () => {
      const parent = document.getElementById("move-div");
      const scrollPercent = (window.scrollY - 834) / parent.clientHeight;

      // console.log(window.scrollY - 834);
      // console.log(parent.clientHeight); // 214 px
      // console.log(scrollPercent);
      let right = scrollPercent * parent.clientWidth;
      right > 40 ? setTruckRight(right) : setTruckRight(40);
    };
    window.addEventListener("scroll", updateCruiseLeft, { passive: true });
    return () => window.removeEventListener("scroll", updateCruiseLeft);
  });

  return (
    <Box
      id="move-div"
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        position: "relative",
        height: "fit-content",
        pb: "100px",
        display: "flex",
        flexDirection: "column",
        zIndex: display ? 99 : 0,
        opacity: display ? 100 : 0,
        transition: "all .5s ease-in-out",
      }}
    >
      <Box
        component="img"
        src={sweden}
        sx={{
          position: "absolute",
          width: { xs: "40px", sm: "50px", md: "60px" },
          left: { xs: "-75px", sm: "-85px", md: "-95px" },
          top: "-10px",
          mt: "-10px",
        }}
      />
      <Box
        sx={{
          background: "#3c3c3c",
          width: "15px",
          height: "15px",
          borderRadius: "50px",
          position: "absolute",
          left: "-10px",
        }}
      />
      <Box
        component="img"
        src={hongkong}
        sx={{
          position: "absolute",
          width: { xs: "40px", sm: "50px", md: "60px" },
          left: { xs: "150px", sm: "300px", md: "400px" },
          mt: "-10px",
        }}
      />
      <Box
        component="img"
        src={moving}
        sx={{
          position: "absolute",
          width: { xs: "70px", sm: "80px", md: "90px" },
          WebkitTransform: "scaleX(-1)",
          mt: "-33px",
          right: truckRight,
        }}
      />
      <Typography
        variant="subtitle1"
        theme={theme}
        sx={{ pt: { xs: "2.5rem", sm: "3rem", md: "4rem" } }}
      >
        2019
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
        Moved to Sweden to start a new chapter of my life
      </Typography>
    </Box>
  );
};

export default Move;
