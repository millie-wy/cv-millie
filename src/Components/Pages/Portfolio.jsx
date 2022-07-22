import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "../Contexts/ThemeContextProvider";

const Portfolio = () => {
  const { theme } = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        py: "4rem",
        background: "#ECF1F5",
        height: "fit-content",
        minHeight: "calc(100vh - 3.5rem)",
        overflow: "hidden",
        scrollBehavior: "smooth",
      }}
    >
      {/* background color for header */}
      <Box
        sx={{
          background: "#ECF1F5",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: -99,
          height: "4rem",
        }}
      />

      {/* subject */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" theme={theme} textAlign="center">
          MY PORTFOLIO
        </Typography>
        <Typography
          variant="subtitle2"
          theme={theme}
          textAlign="center"
          sx={{ pt: ".5rem" }}
        >
          The library of my coding projects - from both my study and my hobby
          projects
        </Typography>
      </Box>
    </Container>
  );
};

export default Portfolio;
