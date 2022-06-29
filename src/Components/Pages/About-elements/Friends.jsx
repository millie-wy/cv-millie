import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { displayElement } from "../../../Helper";
import people from "../../../Media/Icons/people.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const Friends = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", displayElement, { passive: true });
    return () =>
      window.removeEventListener("scroll", setDisplay(displayElement(607)));
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
        variant="body1"
        theme={theme}
        sx={{
          width: { xs: "auto", sm: "250px" },
          maxWidth: { xs: "200px", sm: "250px" },
        }}
      >
        Meet a lot of new friends from all around the world,
      </Typography>
      <Box
        component="img"
        src={people}
        sx={{
          width: "60px",
          pt: { xs: ".5rem", sm: 0 },
        }}
      />
    </Box>
  );
};

export default Friends;
