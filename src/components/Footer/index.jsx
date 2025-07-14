import { Box, Typography, Container } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      borderRadius: 1,
      width: "100%",
      py: 2,
      mt: 1,
      background: "linear-gradient(to right, #0b5394, #073763)",
      color: "white",
      position: "relative",
      boxShadow: 3,
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bottom: 0
    }}
  >
    <Container maxWidth="lg">
      <Typography align="center">&copy; {new Date().getFullYear()} - Real Time and Embedded Systems Research Group</Typography>
    </Container>
  </Box>
);

export default Footer;
