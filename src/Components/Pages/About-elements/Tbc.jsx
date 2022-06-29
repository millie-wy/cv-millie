import { Box, Typography } from "@mui/material";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const Tbc = () => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        position: "relative",
        height: "fit-content",
      }}
    >
      <Box
        sx={{
          background: "#3c3c3c",
          width: "10px",
          height: "10px",
          borderRadius: "50px",
          position: "absolute",
          left: "-7.5px",
          top: "15px",
        }}
      />
      <Typography
        variant="subtitle1"
        theme={theme}
        sx={{
          width: { xs: "auto", sm: "250px" },
          maxWidth: { xs: "200px", sm: "250px" },
        }}
      >
        TO BE CONTINUED
      </Typography>
    </Box>
  );
};

export default Tbc;
