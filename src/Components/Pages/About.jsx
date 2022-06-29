import { Box, Container, Typography } from "@mui/material";
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
      <Typography variant="h4" theme={theme} textAlign="center">
        ABOUT ME
      </Typography>
      <Typography
        variant="h6"
        theme={theme}
        textAlign="center"
        paddingBottom="5rem"
      >
        Scroll down to see my life journey!
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          py: "20px",
        }}
      >
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

export default About;
