import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    color: "#999999",
  },
  tableHeade: {
    background: "#f1f3f6",
    borderRadius: "6px",
  },
  tableRow: {
    cursor: "pointer",
    "&:hover, &:focus": {
      background: "#f1f3f6",
    },
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TableWrapper() {
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      style={{
        padding: 30,
        height: "100%",
      }}
    >
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHeade}>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="left">LastName</TableCell>
            <TableCell align="left">City</TableCell>
            <TableCell align="left">Street</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className={classes.tableRow}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
