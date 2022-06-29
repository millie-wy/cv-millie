import { Box, Typography } from "@mui/material";
import people from "../../../Media/Icons/people.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const Friends = () => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        height: "fit-content",
        pb: "100px",
        display: "flex",
        flexWrap: "wrap",
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
