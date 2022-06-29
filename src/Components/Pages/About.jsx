import { Container, Box, Typography } from "@mui/material";
import { useTheme } from "../Contexts/ThemeContextProvider";
import graduated from "../../Media/Icons/graduated.png";
import work from "../../Media/Icons/work.png";
import busy from "../../Media/Icons/busy.png";
import coding from "../../Media/Icons/coding.png";
import cruise from "../../Media/Icons/cruise.png";
import flight from "../../Media/Icons/flight.png";
import hongkong from "../../Media/Icons/hongkong.png";
import moving from "../../Media/Icons/moving.png";
import people from "../../Media/Icons/people.png";
import sweden from "../../Media/Icons/sweden.png";

const About = () => {
  const { theme } = useTheme();
  return (
    <Container sx={{ py: "4rem", background: "#ECF1F5" }}>
      <Typography variant="h4" theme={theme} textAlign="center">
        ABOUT ME
      </Typography>

      <Typography
        variant="h6"
        theme={theme}
        textAlign="center"
        sx={{ pb: "5rem" }}
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
        {/* background color for header */}
        <Box
          sx={{
            background: "#ECF1F5",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -99,
            width: "100vw",
            height: "4rem",
          }}
        />

        {/* main boxes */}
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
          {/* 2011 grad */}
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
              src={graduated}
              sx={{
                position: "absolute",
                width: { xs: "40px", sm: "50px", md: "60px" },
                left: { xs: "-75px", sm: "-85px", md: "-95px" },
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
              2011
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
              Graduated from university majoring in Hopsitality Management
            </Typography>
          </Box>

          {/* 2011 to 2019 work */}
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
              Gained my experience in administration, event management,
              marketing and management from several very interesting jobs
            </Typography>
          </Box>

          {/* but my work life... */}
          <Box
            sx={{
              pl: { xs: "1.5rem", sm: "2rem" },
              height: "fit-content",
              pb: "100px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="subtitle1"
              theme={theme}
              sx={{
                width: { xs: "auto", sm: "250px" },
                maxWidth: { xs: "200px", sm: "250px" },
                pr: ".5rem",
              }}
            >
              But my work life was not just about working...
            </Typography>
            <Box
              component="img"
              src={busy}
              sx={{
                width: "60px",
                pt: { xs: ".5rem", sm: 0 },
              }}
            />
          </Box>

          {/* through my jobs at cruiselines */}
          <Box
            sx={{
              pl: { xs: "1.5rem", sm: "2rem" },
              height: "fit-content",
              pb: "200px",
            }}
          >
            <Typography
              variant="body1"
              theme={theme}
              sx={{
                width: { xs: "auto", sm: "250px" },
                maxWidth: { xs: "200px", sm: "250px" },
              }}
            >
              Through my jobs at two cruiselines, I got the chance to...
            </Typography>
            <Box
              component="img"
              src={cruise}
              width="150px"
              sx={{
                position: "absolute",
                width: { xs: "120px", sm: "140px", md: "160px" },
                zIndex: -1,
              }}
            />
          </Box>

          {/* meet a lot of... */}
          <Box
            sx={{
              pl: { xs: "1.5rem", sm: "2rem" },
              height: "fit-content",
              pb: "100px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="body1"
              theme={theme}
              sx={{
                width: { xs: "auto", sm: "250px" },
                maxWidth: { xs: "200px", sm: "250px" },
              }}
            >
              Meet a lot of new friends from all around the world,
            </Typography>
            <Box
              component="img"
              src={people}
              sx={{
                width: "60px",
                pt: { xs: ".5rem", sm: 0 },
              }}
            />
          </Box>

          {/* and travel around to... */}
          <Box
            sx={{
              pl: { xs: "1.5rem", sm: "2rem" },
              height: "fit-content",
              pb: "100px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="body1"
              theme={theme}
              sx={{
                width: { xs: "auto", sm: "250px" },
                maxWidth: { xs: "200px", sm: "250px" },
                pr: ".5rem",
              }}
            >
              And travel around to get to know how amazing this world is!
            </Typography>
            <Box
              component="img"
              src={flight}
              sx={{
                width: "60px",
                pt: { xs: ".5rem", sm: 0 },
              }}
            />
          </Box>

          {/* 2019 move */}
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
              src={sweden}
              sx={{
                position: "absolute",
                width: { xs: "40px", sm: "50px", md: "60px" },
                left: { xs: "-75px", sm: "-85px", md: "-95px" },
                top: "-10px",
                mt: "-10px",
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
              }}
            />
            <Box
              component="img"
              src={hongkong}
              sx={{
                position: "absolute",
                width: { xs: "40px", sm: "50px", md: "60px" },
                left: { xs: "150px", sm: "300px", md: "400px" },
                mt: "-10px",
              }}
            />
            <Box
              component="img"
              src={moving}
              sx={{
                position: "absolute",
                width: { xs: "70px", sm: "80px", md: "90px" },
                WebkitTransform: "scaleX(-1)",
                mt: "-33px",
              }}
            />
            <Typography
              variant="subtitle1"
              theme={theme}
              sx={{ pt: { xs: "2.5rem", sm: "3rem", md: "4rem" } }}
            >
              2019
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
              Moved to Sweden to start a new chapter of my life
            </Typography>
          </Box>

          {/* 2021 study */}
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
              src={coding}
              sx={{
                position: "absolute",
                width: { xs: "40px", sm: "50px", md: "60px" },
                left: { xs: "-75px", sm: "-85px", md: "-95px" },
                top: "-10px",
                mt: "-10px",
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
              2021
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
              Began my full-time study in Front-end Development, and expected to
              graduate in 2022
            </Typography>
          </Box>

          {/* tbc */}
          <Box
            sx={{
              pl: { xs: "1.5rem", sm: "2rem" },
              position: "relative",
              height: "fit-content",
            }}
          >
            <Box
              sx={{
                background: "#3c3c3c",
                width: "10px",
                height: "10px",
                borderRadius: "50px",
                position: "absolute",
                left: "-7.5px",
                top: "15px",
              }}
            />
            <Typography
              variant="subtitle1"
              theme={theme}
              sx={{
                width: { xs: "auto", sm: "250px" },
                maxWidth: { xs: "200px", sm: "250px" },
              }}
            >
              TO BE CONTINUED
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
