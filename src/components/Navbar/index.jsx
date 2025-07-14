import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ views }) => {
  const location = useLocation();

  return (
    <AppBar position="sticky" color="default" elevation={1}  sx={{ borderRadius: 1 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between"}}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "primary.main" }}>
            Real Time Systems Research Group
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {views.map((view) => (
              <Button
                key={view.path}
                component={Link}
                to={view.path}
                variant={location.pathname === view.path ? "contained" : "text"}
                color="primary"
                sx={{ borderRadius: 2 }}>
                {view.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
