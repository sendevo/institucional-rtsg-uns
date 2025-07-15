import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo_gray.png";

const Navbar = ({ views }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RTS Group
      </Typography>
      <Divider />
      <List>
        {views.map((view) => (
          <ListItem
            key={view.path}
            component={Link}
            to={view.path}
            selected={location.pathname === view.path}>
            <ListItemText primary={view.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={1}
        sx={{ borderRadius: 1 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={logo} alt="RTS Group Logo" style={{ height: 40 }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "primary.main" }}>
                Real Time Systems Research Group
              </Typography>
            </Box>

            <Box sx={{display: { xs: "none", md: "flex" },gap: 1}}>
              {views.map((view) => (
                <Button
                  key={view.path}
                  component={Link}
                  to={view.path}
                  variant={location.pathname === view.path ? "contained" : "text"}
                  color="primary">
                  {view.text}
                </Button>
              ))}
            </Box>

            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{keepMounted: true}}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
