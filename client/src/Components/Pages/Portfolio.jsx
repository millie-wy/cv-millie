import { SortRounded } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Container,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { usePortfolio } from "../Contexts/PortfolioContextProvider";
import { useTheme } from "../Contexts/ThemeContextProvider";
import PortfolioProjects from "./PortfolioProjects";

const Portfolio = () => {
  const { theme } = useTheme();
  const { isLoading, fetchPortfolio, portfolio, convertDate } = usePortfolio();
  const [sort, setSort] = useState("Newest");
  const [toggleSort, setToggleSort] = useState(null);
  const open = Boolean(toggleSort);

  const handleClick = (e) => setToggleSort(e.currentTarget);
  const handleClose = () => setToggleSort(null);

  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);

  const selectSortCriteria = (e) => {
    setSort(e.target.innerText);
    handleClose();
  };

  const sortData = (a, b) =>
    sort === "Z-A"
      ? b.title.localeCompare(a.title)
      : sort === "A-Z"
      ? a.title.localeCompare(b.title)
      : sort === "Oldest"
      ? convertDate(a.released) > convertDate(b.released)
        ? 1
        : -1
      : convertDate(a.released) < convertDate(b.released)
      ? 1
      : -1;

  return isLoading ? (
    <Container
      maxWidth={false}
      sx={{
        py: "4rem",
        textAlign: "center",
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
      <CircularProgress size="2rem" color="inherit" />
    </Container>
  ) : (
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
            {portfolio.length} Projects
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
              id="sort-button"
              variant="body2"
              theme={theme}
              sx={{ pl: ".2rem", cursor: "pointer" }}
              onClick={handleClick}
            >
              Sort by {sort}
            </Typography>

            {/* sort menu */}
            <Menu
              aria-labelledby="sort-button"
              anchorEl={toggleSort}
              open={open}
              onClose={handleClose}
              sx={{
                "& .MuiPaper-root": {
                  background: "#D6D5D5",
                  boxShadow: "none",
                  borderRadius: "2px",
                },
              }}
              anchorOrigin={{
                vertical: 22,
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={selectSortCriteria}>
                <Typography variant="body2" theme={theme} sx={{ width: 55 }}>
                  Newest
                </Typography>
              </MenuItem>
              <MenuItem onClick={selectSortCriteria}>
                <Typography variant="body2" theme={theme}>
                  Oldest
                </Typography>
              </MenuItem>
              <MenuItem onClick={selectSortCriteria}>
                <Typography variant="body2" theme={theme}>
                  A-Z
                </Typography>
              </MenuItem>
              <MenuItem onClick={selectSortCriteria}>
                <Typography variant="body2" theme={theme}>
                  Z-A
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "1.3rem", sm: "1.4rem", md: "1.5rem" },
          }}
        >
          {portfolio
            .sort((a, b) => sortData(a, b))
            .map((project) => (
              <PortfolioProjects key={project._id} project={project} />
            ))}
        </Box>
      </Container>
    </Container>
  );
};

export default Portfolio;
