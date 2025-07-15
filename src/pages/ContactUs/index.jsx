import { Box, Typography, Grid, Link, Paper } from "@mui/material";

const View = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>

      <Grid container sx={{ width: "100%", m: 0 }}>
        <Grid item xs={12}>
          <Box sx={{ p: 1, height: "100%" }}>
            <Typography>
              Departamento de Ingeniería Eléctrica y Computadoras
              <br/>
              Universidad Nacional del Sur
              <br/>
              <strong>Address: </strong>Avda. San Andrés 800, Bahía Blanca (8000), Buenos Aires, Argentina
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong>{" "}
              <Link href="mailto:jorozco@uns.edu.ar">jorozco@uns.edu.ar</Link>
            </Typography>
            <Typography variant="body1">
              <strong>Phone:</strong> +54 9 291 459 5181
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sx={{ 
            mt:3, 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center" 
          }}>
          <Paper elevation={2} sx={{ p: 1, width: "100vw", height: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661.4292253117151!2d-62.248950045775196!3d-38.69506945257516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda4a518e79039%3A0x54956e2b933652e9!2sInstituto%20de%20Investigaciones%20en%20Ingenier%C3%ADa%20El%C3%A9ctrica%20-%20Universidad%20Nacional%20del%20Sur%20-%20CONICET!5e1!3m2!1ses-419!2sar!4v1752608041429!5m2!1ses-419!2sar" 
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowfullscreen
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade" />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default View;
