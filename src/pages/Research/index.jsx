import { Box } from "@mui/material";
import Table from "../../components/Table";
import publications from "../../assets/data/production.json";

const View = () => (
  <Box sx={{p:2}}>
    <Table data={publications} />
  </Box>
);

export default View;