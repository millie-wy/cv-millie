import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "../Contexts/ThemeContextProvider";
import { SortRounded } from "@mui/icons-material";
import PortfolioProjects from "./PortfolioProjects";

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
      <Typography variant="h4" theme={theme} textAlign="center">
        MY PORTFOLIO
      </Typography>

      {/* toolbar */}
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            placeItems: "center",
            justifyContent: "space-between",
            pt: "2.5rem",
            pb: "1rem",
          }}
        >
          <Typography
            variant="body1"
            theme={theme}
            sx={{ fontWeight: "bold", textTransform: "uppercase" }}
          >
            10 Projects
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              placeItems: "center",
            }}
          >
            <SortRounded fontSize="small" />
            <Typography
              variant="overline"
              theme={theme}
              sx={{ pl: ".2rem", cursor: "pointer" }}
            >
              Date Published
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
          <PortfolioProjects />
          <PortfolioProjects />
        </Box>
      </Container>
    </Container>
  );
};

export default Portfolio;
