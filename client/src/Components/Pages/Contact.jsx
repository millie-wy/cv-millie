import {
  FacebookRounded as Facebook,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "../Contexts/ThemeContextProvider";
import ContactForm from "./Contact-elements/ContactForm";

const Contact = () => {
  const { theme } = useTheme();

  const links = [
    {
      icon: LinkedIn,
      href: "https://www.linkedin.com/in/milliecheung/",
    },
    {
      icon: GitHub,
      href: "https://github.com/millie-wy/",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/milliecheung/",
    },
  ];

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
        CONTACT ME
      </Typography>

      <Typography
        theme={theme}
        variant="subtitle1"
        textAlign="center"
        sx={{ pt: "2rem" }}
      >
        Send me a message
      </Typography>
      <ContactForm />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography theme={theme} variant="subtitle1">
          Or get in touch with me on
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            columnGap: "2rem",
            mt: "1rem",
          }}
        >
          {links.map((link) => (
            <Box
              key={link.href}
              component="a"
              target="_blank"
              href={link.href}
              rel="noopener noreferrer"
            >
              <Box
                component={link.icon}
                color="#3c3c3c"
                fontSize="2rem"
                sx={{
                  "&:hover": {
                    color: "rgb(108, 168, 202)",
                    transform: "scale(1.25)",
                    transition: "ease-in-out 0.25s",
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
