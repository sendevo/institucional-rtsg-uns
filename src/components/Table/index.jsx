import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TableSortLabel, TextField, Typography, Box, Link
} from "@mui/material";
import { useState } from "react";

const headCells = [
  { id: "year", label: "Year", sortable: true },
  { id: "title", label: "Title", sortable: true },
  { id: "authors", label: "Authors", sortable: true },
  { id: "desc", label: "Desc.", sortable: true },
  { id: "type", label: "Publication type", sortable: true }
  //{ id: "links", label: "Links", sortable: false },
];

const journalTypes = {
    phd_thesis: "Ph.D. Thesis",
    master_thesis: "Master Thesis",
    journal: "Journal",
    conference: "Conference",
    book: "Book",
    book_chapter: "Book Chapter",
    report: "Report",
    project: "Project",
    transfer: "Transfer"
};

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const PublicationTable = ({ data }) => {
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("year");
  const [search, setSearch] = useState("");

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const filteredData = data.filter((row) => {
    const query = search.toLowerCase();
    return (
      row.title.toLowerCase().includes(query) ||
      row.authors.toLowerCase().includes(query) ||
      row.desc.toLowerCase().includes(query) ||
      row.type.toLowerCase().includes(query) ||
      String(row.year).includes(query)
    );
  });

  const sortedData = filteredData.sort(getComparator(order, orderBy));

  console.log(order, orderBy);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>Publications</Typography>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2, backgroundColor: "background.paper", maxWidth: 400 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
      <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
        <Box sx={{ minWidth: "800px" }}>
            <Table size="small" sx={{ tableLayout: "fixed" }}>
            <TableHead>
                <TableRow>
                {headCells.map((headCell) => (
                    <TableCell key={headCell.id}>
                    {!headCell.sortable ? 
                        <b>{headCell.label}</b>
                     : 
                        <TableSortLabel
                          active={orderBy === headCell.id}
                          direction={orderBy === headCell.id ? order : "asc"}
                          onClick={() => handleSort(headCell.id)}>
                          <b>{headCell.label}</b>
                        </TableSortLabel>
                    }
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {sortedData.map((row, idx) => (
                <TableRow key={idx}>
                    <TableCell>{row.year || <em>N/D</em>}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.authors || <em>N/D</em>}</TableCell>
                    <TableCell>{row.desc || <em>N/D</em>}</TableCell>
                    <TableCell>{journalTypes[row.type] || <em>N/D</em>}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </Box>
      </TableContainer>
    </Box>
  );
};

export default PublicationTable;
