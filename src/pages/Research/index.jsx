import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Table from "../../components/Table";

const View = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Loading JSON data...");
    fetch('data/production.json')
      .then((response) => response.json())
      .then((data) => {
        console.log("Data loaded successfully");
        setData(data);
      })
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  return (
    <Box sx={{p:2}}>
      <Table data={data} />
    </Box>
  );
};

export default View;