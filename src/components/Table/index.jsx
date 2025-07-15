import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, TableSortLabel, TextField, Typography, Box, Link
} from "@mui/material";
import { useState } from "react";

const headCells = [
  { id: "title", label: "Title" },
  { id: "authors", label: "Authors" },
  { id: "year", label: "Year" },
  { id: "desc", label: "Journal" },
  { id: "type", label: "Type" },
  { id: "links", label: "Links", sortable: false },
];

const journalTypes = {
    phd_thesis: "Ph.D. Thesis",
    master_thesis: "Master Thesis",
    journal: "Journal",
    conference: "Conference",
    book: "Book",
    project: "Project",
    transfer: "Transfer"
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const PublicationTable = ({ data }) => {
  const [order, setOrder] = useState("asc");
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

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>Publications</Typography>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ mb: 2 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <TableContainer component={Paper}>
        <Table size="small" sx={{ tableLayout: "fixed" }}>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell sx={{ width: "16.66%" }} key={headCell.id}>
                  {headCell.sortable === false ? (
                    headCell.label
                  ) : (
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={() => handleSort(headCell.id)}>
                      {headCell.label}
                    </TableSortLabel>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell sx={{ width: "16.66%" }}>{row.title}</TableCell>
                <TableCell sx={{ width: "16.66%" }}>{row.authors || <em>N/D</em>}</TableCell>
                <TableCell sx={{ width: "16.66%" }}>{row.year || <em>N/D</em>}</TableCell>
                <TableCell sx={{ width: "16.66%" }}>{row.desc || <em>N/D</em>}</TableCell>
                <TableCell sx={{ width: "16.66%" }}>{journalTypes[row.type] || <em>N/D</em>}</TableCell>
                <TableCell sx={{ width: "16.66%" }}>
                  {row.links
                  .filter((link) => typeof link === "string")
                  .map((link, i) => (
                    <Link
                        key={i}
                        href={link}
                        target="_blank"
                        rel="noopener"
                        sx={{ 
                            display: "block",
                            maxWidth: "100%",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis" 
                        }}>
                        {link.split("/").pop()}
                    </Link>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PublicationTable;
