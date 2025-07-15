import { Box, Typography, Container } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      borderRadius: 1,
      width: "100%",
      py: 1,
      mt: 1,
      mb: 1,
      color: "primary.main",
      backgroundColor: "background.default",
      position: "relative",
      boxShadow: 3,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bottom: 0
    }}>
    <Container maxWidth="lg">
      <Typography align="center">&copy; {new Date().getFullYear()} | Real-Time and Embedded Systems Research Group</Typography>
    </Container>
  </Box>
);

export default Footer;
