import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import { useState } from "react";
import { Container, StyledCell, TableTitle } from "./JobDetailTable";

function JobDDs() {
  // DDs Dumy data
  const ddInfo = [
    {
      step: "STEP1",
      ddname: "SYSIN",
      datasetname: "JOB00074(oframe7.HW02.JOB00074.D000001",
      insert: "0",
      retrieve: "2",
      update: "0",
      dddelete: "0",
    },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  return (
    <Container>
      <TableContainer className="table">
        <Table size="small">
          <TableHead className="table_head">
            <TableRow>
              <TableCell>
                <TableTitle>DDs</TableTitle>
              </TableCell>
              <TablePagination
                count={ddInfo.length}
                page={page}
                rowsPerPage={rowsPerPage}
              />
            </TableRow>
            <TableRow>
              <StyledCell align="center">
                <span>Step</span>
              </StyledCell>
              <StyledCell align="center">
                <span>DD Name</span>
              </StyledCell>
              <StyledCell align="center">
                <span>Dataset Name</span>
              </StyledCell>
              <StyledCell align="center">
                <span>Insert</span>
              </StyledCell>
              <StyledCell align="center">
                <span>Retrieve</span>
              </StyledCell>
              <StyledCell align="center">
                <span>Update</span>
              </StyledCell>
              <StyledCell align="center">
                <span>Delete</span>
              </StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ddInfo.map(
              (
                {
                  step,
                  ddname,
                  datasetname,
                  insert,
                  retrieve,
                  update,
                  dddelete,
                },
                index
              ) => (
                <TableRow key={index} hover={true}>
                  <StyledCell>
                    <span>{step}</span>
                  </StyledCell>
                  <StyledCell>
                    <span>{ddname}</span>
                  </StyledCell>
                  <StyledCell>
                    <span>{datasetname}</span>
                  </StyledCell>
                  <StyledCell>
                    <span>{insert}</span>
                  </StyledCell>
                  <StyledCell>
                    <span>{retrieve}</span>
                  </StyledCell>
                  <StyledCell>
                    <span>{update}</span>
                  </StyledCell>
                  <StyledCell>
                    <span>{dddelete}</span>
                  </StyledCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default JobDDs;
