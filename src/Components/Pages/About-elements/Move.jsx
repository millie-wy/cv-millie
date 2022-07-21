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
  const [truckRight, setTruckRight] = useState();

  useEffect(() => {
    window.addEventListener("scroll", displayElement, { passive: true });
    return () =>
      window.removeEventListener("scroll", setDisplay(displayElement(900)));
  });

  useEffect(() => {
    const updateTruckRight = () => {
      const parent = document.getElementById("move-div");
      const aniContainer = document.getElementById("truck-ani-div");
      const scrollPercent = Math.min(
        1,
        (window.scrollY - 1000) / parent.clientHeight
      );

      let truckPos = scrollPercent * aniContainer.offsetWidth;

      let left =
        scrollPercent *
        (aniContainer.offsetWidth -
          document.getElementById("truck").clientWidth);

      if (scrollPercent > 0) {
        setTruckRight(left);
      }

      // position of the truck and flag elements to be done, moving speed as well
    };
    window.addEventListener("scroll", updateTruckRight, { passive: true });
    return () => window.removeEventListener("scroll", updateTruckRight);
  });

  return (
    <Box
      id="move-div"
      sx={{
        position: "relative",
        height: 200,
        display: "flex",
        flexDirection: "column",
        zIndex: display ? 99 : 0,
        opacity: display ? 100 : 0,
        transition: "all .5s ease-in-out",
        background: "yellow",
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
        }}
      />
      <Box
        id="sweden-flag"
        component="img"
        src={sweden}
        sx={{
          position: "absolute",
          width: { xs: "40px", sm: "50px", md: "60px" },
          left: { xs: "-75px", sm: "-85px", md: "-95px" },
          mt: "-10px",
        }}
      />
      <Box
        id="truck-ani-div"
        sx={{
          // background: "skyblue",
          position: "relative",
          left: { xs: "-85px", sm: "-95px", md: "-105px" },
          height: { xs: "60px", sm: "70px", md: "80px" },
          width: { xs: "225px", sm: "385px", md: "495px" },
          pl: 0,
        }}
      >
        <Box
          id="hk-flag"
          component="img"
          src={hongkong}
          sx={{
            position: "absolute",
            width: { xs: "40px", sm: "50px", md: "60px" },
            right: "-12%",
            mt: "-10px",
          }}
        />
        <Box
          id="truck"
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
      </Box>
      <Typography
        variant="subtitle1"
        theme={theme}
        sx={{
          // pt: { xs: "2.5rem", sm: "3rem", md: "4rem" },
          pl: { xs: "1.5rem", sm: "2rem" },
        }}
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
          pl: { xs: "1.5rem", sm: "2rem" },
        }}
      >
        Moved to Sweden to start a new chapter of my life
      </Typography>
    </Box>
  );
};

export default Move;
