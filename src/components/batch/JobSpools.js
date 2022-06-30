import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
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

function JobSpools() {
  // Spools Dumy data
  const spoolInfo = [
    {
      number: "0",
      step: "--------",
      ddname: "INP JCL",
      size: "343",
      datasetname: "INP JCL",
    },
    {
      number: "1",
      step: "--------",
      ddname: "SYSMSG",
      size: "2K",
      datasetname: "SYSMSG",
    },
    {
      number: "2",
      step: "--------",
      ddname: "CATPROC",
      size: "0",
      datasetname: "CATPROC",
    },
    {
      number: "3",
      step: "--------",
      ddname: "CONVJCL",
      size: "335",
      datasetname: "CONVJCL",
    },
    {
      number: "4",
      step: "--------",
      ddname: "JESMSG",
      size: "734",
      datasetname: "JESMSG",
    },
    {
      number: "5",
      step: "--------",
      ddname: "JESJCL",
      size: "922",
      datasetname: "JESJCL",
    },
    {
      number: "6",
      step: "STEP1",
      ddname: "SYSOUT",
      size: "13",
      datasetname: "oframe7.HW02.JOB00074.D000002",
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
                <TableTitle>Spools</TableTitle>
              </TableCell>
              <TablePagination
                count={spoolInfo.length}
                page={page}
                rowsPerPage={rowsPerPage}
              />
            </TableRow>
            <TableRow>
              <StyledCell align="center">
                <span>Number</span>
              </StyledCell>
              <StyledCell align="center">
                <span>Step</span>
              </StyledCell>
              <StyledCell align="center">
                <span>DD Name</span>{" "}
              </StyledCell>
              <StyledCell align="center">
                <span>Size</span>
              </StyledCell>
              <StyledCell align="center">
                <span>Dataset Name</span>{" "}
              </StyledCell>
              <StyledCell align="center">
                <span>Download</span>
              </StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {spoolInfo.map(({ number, step, ddname, size, datasetname }) => (
              <TableRow key={number} hover={true}>
                <StyledCell>
                  <span>{number}</span>
                </StyledCell>
                <StyledCell>
                  <span>{step}</span>
                </StyledCell>
                <StyledCell>
                  <span>{ddname}</span>
                </StyledCell>
                <StyledCell>
                  <span>{size}</span>
                </StyledCell>
                <StyledCell>
                  <span>{datasetname}</span>
                </StyledCell>
                <StyledCell align="center">
                  <span>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faFolderOpen}
                    ></FontAwesomeIcon>
                  </span>
                </StyledCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default JobSpools;
