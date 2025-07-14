import { Box, Container, Typography, Paper } from "@mui/material";

const View = () => (
  <Box
    sx={{
      background: "linear-gradient(to right, #e0f7fa, #e1f5fe)",
      py: 8,
      mt: 1,
      borderRadius: 1,
      boxShadow: 3
    }}
  >
    <Container maxWidth="md" sx={{ textAlign: "center"}}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
        Welcome to Our Research Group
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        We explore ideas at the intersection of science and technology.
      </Typography>
    </Container>

    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h5" gutterBottom>
          What We Do
        </Typography>
        <Typography>
          Our group focuses on cutting-edge research in artificial intelligence, data science, and applied engineering. We collaborate with industry and academia to push the boundaries of innovation.
        </Typography>
      </Paper>
    </Container>
  </Box>
);

export default View;
