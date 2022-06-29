import { Box, Typography } from "@mui/material";
import work from "../../../Media/Icons/work.png";
import { useTheme } from "../../Contexts/ThemeContextProvider";

const JobsInHongKong = () => {
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
        src={work}
        sx={{
          position: "absolute",
          width: { xs: "40px", sm: "50px", md: "60px" },
          left: { xs: "-75px", sm: "-85px", md: "-95px" },
          top: "-0px",
          mt: { xs: "-10px", sm: "-20px" },
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
