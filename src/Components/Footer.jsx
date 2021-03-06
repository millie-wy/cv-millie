import { Container } from "@mui/material";

const Footer = () => {
  return (
    <Container
      sx={{
        textAlign: "center",
        height: "1.5rem",
        background: "transparent",
        color: "#fff",
        fontSize: ".9rem",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      Millie Cheung © 2022. All rights reserved.
    </Container>
  );
};

export default Footer;
