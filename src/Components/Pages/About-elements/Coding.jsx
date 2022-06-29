import { Box, Typography } from "@mui/material";
import coding from "../../../Media/Icons/coding.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const Coding = () => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        pl: { xs: "1.5rem", sm: "2rem" },
        position: "relative",
        height: "fit-content",
        pb: "100px",
      }}
    >
      <Box
        component="img"
        src={coding}
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
          top: "-1px",
        }}
      />
      <Typography variant="subtitle1" theme={theme}>
        2021
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
        Began my full-time study in Front-end Development, and expected to
        graduate in 2022
      </Typography>
    </Box>
  );
};

export default Coding;
