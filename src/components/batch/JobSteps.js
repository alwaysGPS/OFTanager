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

function JobSteps() {
  // Steps Dumy data
  const stepInfo = [
    {
      step: "STEP1",
      rcode: "R0000",
      start: "2022/06/22 23:20:09",
      end: "2022/06/22 23:20:09",
      cpu: "0",
      processortime: "0",
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
                <TableTitle>Steps</TableTitle>
              </TableCell>
              <TablePagination
                count={stepInfo.length}
                page={page}
                rowsPerPage={rowsPerPage}
              />
            </TableRow>
            <TableRow>
              <StyledCell align="center">
                <span>Step</span>
              </StyledCell>
              <StyledCell align="center">
                <span>RCODE</span>
              </StyledCell>
              <StyledCell align="center">
                <span>Start</span>{" "}
              </StyledCell>
              <StyledCell align="center">
                <span>End</span>
              </StyledCell>
              <StyledCell align="center">
                <span>CPU</span>{" "}
              </StyledCell>
              <StyledCell align="center">
                <span>Processor Time</span>
              </StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stepInfo.map(
              ({ step, rcode, start, end, cpu, processortime }, index) => (
                <TableRow key={index} hover={true}>
                  <StyledCell>
                    <span>{step}</span>
                  </StyledCell>
                  <StyledCell>
                    <span>{rcode}</span>
                  </StyledCell>
                  <StyledCell>
                    <span>{start}</span>
                  </StyledCell>
                  <StyledCell>
                    <span>{end}</span>
                  </StyledCell>
                  <StyledCell>
                    <span>{cpu}</span>
                  </StyledCell>
                  <StyledCell>
                    <span>{processortime}</span>
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

export default JobSteps;
