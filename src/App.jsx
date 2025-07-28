import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import views from "./pages";
import "./index.css";

const styles = {
  container: {
    py: 1,
    mt: 1,
    borderRadius: 1,
    boxShadow: 3,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "background.default",
  },
  main: {
    display: "flex", 
    flexDirection: "column", 
    minHeight: "100vh"
  }
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/rts">
        <Box sx={styles.main}>
          <Navbar views={views} />
          <Box component="main" sx={styles.container}>
            <Routes>
              {views.map((view, index) => (
                <Route key={index} path={view.path} element={view.component} />
              ))}
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;