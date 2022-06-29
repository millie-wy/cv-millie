import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";
import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useTheme } from "../Contexts/ThemeContextProvider";
import Coding from "./About-elements/Coding";
import Cruiselines from "./About-elements/Cruiselines";
import Friends from "./About-elements/Friends";
import Graduate from "./About-elements/Graduate";
import JobsInHongKong from "./About-elements/JobsInHongKong";
import Move from "./About-elements/Move";
import NotJustAboutWork from "./About-elements/NotJustAboutWork";
import Tbc from "./About-elements/Tbc";
import Travel from "./About-elements/Travel";

const About = () => {
  const { theme } = useTheme();
  const [maskTop, setMaskTop] = useState(34);

  useEffect(() => {
    const adjustMaskTop = () => {
      console.log(window.scrollY);
      let y = window.scrollY;
      y < 11.5
        ? setMaskTop(34)
        : y <= 400
        ? setMaskTop(y * 1.45)
        : setMaskTop(y * 1.4);
    };
    window.addEventListener("scroll", adjustMaskTop, { passive: true });
    return () => window.removeEventListener("scroll", adjustMaskTop);
  });

  return (
    <Container sx={{ py: "4rem", background: "#ECF1F5" }}>
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
      {/* main content  */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" theme={theme} textAlign="center">
          ABOUT ME
        </Typography>
        <Typography variant="h6" theme={theme} textAlign="center">
          Scroll down to see my life journey!
        </Typography>
        {/* <DownArrow fontSize="large" sx={{ pt: "1rem", pb: "5rem" }} /> */}
        <DownArrow>
          <KeyboardDoubleArrowDownRoundedIcon
            color="#3c3c3c"
            fontSize="large"
            sx={{ pt: "1rem", pb: "5rem" }}
          />
        </DownArrow>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          py: "20px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            background: "#ECF1F5",
            position: "absolute",
            top: maskTop,
            bottom: 0,
            left: -10,
            right: 0,
            zIndex: 98,
            scrollBehavior: "smooth",
          }}
        />

        {/* left box */}
        <Box sx={{ width: { xs: "30%", sm: "35%", md: "50%" } }} />

        {/* right box */}
        <Box
          sx={{
            width: { xs: "70%", sm: "65%", md: "50%" },
            borderLeft: "5px solid #3c3c3c",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Graduate />
          <JobsInHongKong />
          <NotJustAboutWork />
          <Cruiselines />
          <Friends />
          <Travel />
          <Move />
          <Coding />
          <Tbc />
        </Box>
      </Box>
    </Container>
  );
};

const bouncingArrow = keyframes`
  0%, 100%  { transform: translateY(0); }
  25%, 75% { transform: translateY(-10px); }
  50%, { transform: translateY(-20px); }
  `;

const DownArrow = styled.h1`
  animation: ${bouncingArrow} 1.5s infinite;
`;

export default About;
