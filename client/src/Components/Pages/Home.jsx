import {
  Email,
  FacebookRounded as Facebook,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import hkbg1 from "../../Media/Images/hkbg1.webp";
import hkbg2 from "../../Media/Images/hkbg2.webp";
import hkbg3 from "../../Media/Images/hkbg3.webp";
import hkbg4 from "../../Media/Images/hkbg4.webp";
import { useTheme } from "../Contexts/ThemeContextProvider";

const Home = () => {
  const { theme } = useTheme();
  const [background, setBackground] = useState({});

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
    {
      icon: Email,
      href: "mailto:contact.milliec@gmail.com",
    },
  ];

  useEffect(() => {
    const getRandomBg = () => {
      const bg = [
        {
          href: hkbg1,
          author: "Soda TheCat",
          link: "https://www.pexels.com/photo/aerial-view-of-city-buildings-6212942/",
          source: "Pexels",
        },
        {
          href: hkbg2,
          author: "Manson Yim",
          link: "https://unsplash.com/@mansonyms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          source: "Unsplash",
        },
        {
          href: hkbg3,
          author: "Ruslan Bardash",
          link: "https://unsplash.com/@ruslanbardash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          source: "Unsplash",
        },
        {
          href: hkbg4,
          author: "Nick Kwan",
          link: "https://www.pexels.com/photo/brown-and-red-junk-sailing-at-harbor-during-sunset-2693295/",
          source: "Pexels",
        },
      ];
      let random = bg[Math.floor(Math.random() * 4)];
      setBackground(random);
    };
    getRandomBg();
  }, []);

  if (background.href)
    return (
      <Container sx={{ height: "calc(100vh - 5rem)", minHeight: "40rem" }}>
        <Box
          component="img"
          src={background.href}
          alt="background-hk"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -99,
            opacity: "0.75",
            objectFit: "cover",
            width: "100vw",
            height: "100vh",
            minHeight: "45rem",
          }}
        />

        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            borderRadius: "1rem",
            m: "auto",
            width: { xs: "85%", sm: "70%", md: "55%" },
            top: { xs: "8rem", sm: "10rem", md: "12rem" },
          }}
        >
          <Box
            sx={{
              background: "rgba(255,255,255,.6)",
              borderRadius: "4px",
              height: "100%",
              width: "100%",
              position: "absolute",
              zIndex: -99,
            }}
          />
          <Box
            component="img"
            src="https://raw.githubusercontent.com/millie-wy/my-CV/master/Media/Images/m.webp"
            alt="my photo"
            sx={{
              borderRadius: "20rem",
              border: "4px solid rgba(255,255,255,.6)",
              width: "12rem",
              position: "absolute",
              top: "-6.5rem",
              transform: "translateX(-50%)",
            }}
          />

          <Box sx={{ p: "1.5rem", pt: "7rem" }}>
            <Typography variant="h4" theme={theme} marginBottom="1rem">
              Millie Cheung
            </Typography>

            <Typography variant="body1" theme={theme}>
              A{" "}
              <span
                style={{
                  color: "rgb(47, 119, 161)",
                  WebkitMaskImage:
                    "linear-gradient(45deg, rgba(35, 62, 78, 0.6) 30%, rgba(34, 69, 90, 1) 50%, rgba(35, 62, 78, 0.6) 70%)",
                  WebkitMaskSize: "200%",
                  animation: "shine 1s linear infinite",
                }}
              >
                front-end developer student
              </span>{" "}
              based in Gothenburg, Sweden, with a strong passion for building
              things from scratch. I build webpages with a focus on responsive
              design and user experience.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                columnGap: "2rem",
                mt: "1.5rem",
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
                    fontSize="1.3rem"
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

          <Typography
            theme={theme}
            fontSize=".65rem"
            color="#fff"
            sx={{
              opacity: ".7",
              position: "absolute",
              bottom: "-1.2rem",
              left: "50%",
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
            }}
          >
            Background image by {background.author} on{" "}
            <Box
              component="a"
              target="_blank"
              href={background.link}
              rel="noopener noreferrer"
              sx={{ textDecoration: "none", color: "#fff" }}
            >
              {background.source}
            </Box>
          </Typography>
        </Box>
      </Container>
    );
};

export default Home;
