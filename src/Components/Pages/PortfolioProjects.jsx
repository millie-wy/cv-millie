import { Box, Typography } from "@mui/material";
import { useTheme } from "../Contexts/ThemeContextProvider";
import { useState } from "react";

const PortfolioProjects = (props) => {
  const { theme } = useTheme();
  const [readMore, setReadMore] = useState(false);

  const formatDate = (dateString) => {
    const month = dateString.split("/").shift();
    const year = dateString.split("/").pop();

    let date = new Date();
    date.setMonth(month - 1);
    date.setFullYear(year);
    date.setDate(1);

    const formattedDate = date
      .toLocaleDateString("en-GB", { month: "short", year: "numeric" })
      .replace(/ /g, " ");

    return formattedDate;
  };

  return (
    <Box
      sx={{
        background: "#fff",
        borderRadius: "4px",
        display: "flex",
        flexDirection: { xs: "column", sm: "row", md: "row" },
        pt: { xs: "1rem", sm: 0, md: 0 },
      }}
    >
      {/* Preview box */}
      <Box
        sx={{
          minWidth: "250px",
          maxWidth: "250px",
          height: "187.5px",
          backgroundColor: "#B4CEE5",
          borderRadius: {
            xs: "4px",
            sm: "4px 0 0 0",
            md: "4px 0 0 4px",
          },
          margin: { xs: "auto", sm: 0, md: 0 },
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

      {/* project details */}
      <Box sx={{ px: "1.2rem", py: "1rem" }}>
        <Typography variant="body1" theme={theme} fontWeight="bold">
          {props.project.title}
        </Typography>
        <Typography
          variant="overline"
          theme={theme}
          color="#D6D5D5"
          pt=".2rem"
          textTransform="uppercase"
        >
          {formatDate(props.project.released)}
        </Typography>

        <Box>
          <Typography variant="body2" theme={theme} color="#7E7D7D" py=".7rem">
            {readMore
              ? props.project.description
              : props.project.description.substring(0, 200) + "..."}
            <Typography
              variant="overline"
              theme={theme}
              color="#B4CEE5"
              pl=".3rem"
              sx={{ cursor: "pointer" }}
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "Read less" : "Read more"}
            </Typography>
          </Typography>
        </Box>
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
          {props.project.tags.map((tag) => (
            <Typography
              key={tag}
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
              {tag}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioProjects;
