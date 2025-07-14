import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import views from "./pages";

const constainerStyle = {
  background: "linear-gradient(to right, #e0f7fa, #e1f5fe)",
  py: 1,
  mt: 1,
  borderRadius: 1,
  boxShadow: 3,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column"
};


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{display: "flex",flexDirection: "column",minHeight: "100vh"}}>
          <Navbar views={views} />
          <Box component="main" sx={constainerStyle}>
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