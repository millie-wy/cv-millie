import { Box, Typography } from "@mui/material";
import { useTheme } from "../Contexts/ThemeContextProvider";

const PortfolioProjects = () => {
  const { theme } = useTheme();

  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          minWidth: "250px",
          height: "187.5px",
          backgroundColor: "#B4CEE5",
          borderRadius: "4px 0 0 4px",
        }}
      >
        <Typography
          variant="body1"
          theme={theme}
          color="#fff"
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          PREVIEW
        </Typography>
      </Box>
      <Box sx={{ px: "1.2rem", py: "1rem" }}>
        <Typography variant="body1" theme={theme} fontWeight="bold">
          REST-API - American Diner Menu
        </Typography>
        <Typography variant="overline" theme={theme} color="#D6D5D5" pt=".2rem">
          MAY 2022
        </Typography>

        <Box>
          <Typography variant="body2" theme={theme} color="#7E7D7D" py=".7rem">
            A mocked American Diner menu with a REST-API created with NodeJS and
            Express. The API has 5 endpoints (2 GETs, POST, P...
            <Typography
              variant="overline"
              theme={theme}
              color="#B4CEE5"
              pl=".3rem"
              sx={{ cursor: "pointer" }}
            >
              Read more
            </Typography>
          </Typography>
        </Box>

        {/* <Box sx={{ display: "flex", flexDirection: "row", pt: ".8rem" }}>
          <Typography variant="body2" theme={theme} color="#D6D5D5" pr=".6rem">
            CATEGORIES
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: ".3rem",
            }}
          >
            <Typography variant="body2" theme={theme} color="#B4CEE5">
              School Assignment
            </Typography>
            <Typography variant="body2" theme={theme} color="#B4CEE5">
              Group
            </Typography>
          </Box> 
        </Box> */}
        <Typography variant="overline" theme={theme} color="#D6D5D5">
          KEYWORDS
        </Typography>
        <Box
          sx={{
            pt: ".2rem",
            display: "flex",
            flexWrap: "wrap",
            gap: ".3rem",
          }}
        >
          <Typography
            variant="overline"
            theme={theme}
            color="#B4CEE5"
            sx={{
              border: "1px solid #B4CEE5",
              px: ".2rem",
              borderRadius: "2.5px",
              lineHeight: "1rem",
              textTransform: "uppercase",
            }}
          >
            individual
          </Typography>
          <Typography
            variant="overline"
            theme={theme}
            color="#B4CEE5"
            sx={{
              border: "1px solid #B4CEE5",
              px: ".2rem",
              borderRadius: "2.5px",
              lineHeight: "1rem",
              textTransform: "uppercase",
            }}
          >
            individual
          </Typography>
          <Typography
            variant="overline"
            theme={theme}
            color="#B4CEE5"
            sx={{
              border: "1px solid #B4CEE5",
              px: ".2rem",
              borderRadius: "2.5px",
              lineHeight: "1rem",
              textTransform: "uppercase",
            }}
          >
            individual
          </Typography>
          <Typography
            variant="overline"
            theme={theme}
            color="#B4CEE5"
            sx={{
              border: "1px solid #B4CEE5",
              px: ".2rem",
              borderRadius: "2.5px",
              lineHeight: "1rem",
              textTransform: "uppercase",
            }}
          >
            individual
          </Typography>
          <Typography
            variant="overline"
            theme={theme}
            color="#B4CEE5"
            sx={{
              border: "1px solid #B4CEE5",
              px: ".2rem",
              borderRadius: "2.5px",
              lineHeight: "1rem",
              textTransform: "uppercase",
            }}
          >
            individual
          </Typography>
          <Typography
            variant="overline"
            theme={theme}
            color="#B4CEE5"
            sx={{
              border: "1px solid #B4CEE5",
              px: ".2rem",
              borderRadius: "2.5px",
              lineHeight: "1rem",
              textTransform: "uppercase",
            }}
          >
            individual
          </Typography>
          <Typography
            variant="overline"
            theme={theme}
            color="#B4CEE5"
            sx={{
              border: "1px solid #B4CEE5",
              px: ".2rem",
              borderRadius: "2.5px",
              lineHeight: "1rem",
              textTransform: "uppercase",
            }}
          >
            individual
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioProjects;
