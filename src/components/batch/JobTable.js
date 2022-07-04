import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
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
import { Container, StyledCell, TableTitle } from "./JobIcon";

function JobTable() {
  // Spools Dumy data
  const JobInfo = [
    {
      number: "JOB00045",
      jobName: "JOBADD",
      userId: "ROOT",
      jobclass: "A",
      status: "Done",
      watingReason: "  -  ",
      returnCode: "M00000",
      nodeName:"NODE1",
      submitDate_Time:"2022/06/22 21:16:37",
      startDate_Time:"2022/06/22 21:16:38",
      endDate_Time:"2022/06/22 21:16:39",
      jclName:"TEMPJCL_6wXHnd"
    },
    {
      number: "JOB00044",
      jobName: "JOBADD",
      userId: "ROOT",
      jobclass: "A",
      status: "Done",
      watingReason: "  -  ",
      returnCode: "R00000",
      nodeName:"NODE1",
      submitDate_Time:"2022/06/21 22:16:37",
      startDate_Time:"2022/06/21 22:16:38",
      endDate_Time:"2022/06/21 22:16:39",
      jclName:"BATCH.ADD.jcl"
    },
    {
      number: "JOB00043",
      jobName: "JOBADD",
      userId: "ROOT",
      jobclass: "A",
      status: "Done",
      watingReason: "  -  ",
      returnCode: "R00000",
      nodeName:"NODE1",
      submitDate_Time:"2022/06/19 19:07:06",
      startDate_Time:"2022/06/19 19:07:07",
      endDate_Time:"2022/06/19 19:07:08",
      jclName:"TEMPJCL_ndlhlC"
    },
    {
      number: "JOB00042",
      jobName: "JOBADD",
      userId: "ROOT",
      jobclass: "A",
      status: "Done",
      watingReason: "  -  ",
      returnCode: "R00000",
      nodeName:"NODE1",
      submitDate_Time:"2022/06/19 19:06:57",
      startDate_Time:"2022/06/19 19:06:58",
      endDate_Time:"2022/06/19 19:06:59",
      jclName:"TEMPJCL_xqXqFh"
    }    
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
                <TableTitle>
                  <FontAwesomeIcon
                  className="icon"
                  icon={faLaptopCode} />
                  <FontAwesomeIcon
                  className="icon" 
                  icon={faCloudArrowDown} />
                </TableTitle>
              </TableCell>
              <TablePagination
                count={JobInfo.length}
                page={page}
                rowsPerPage={rowsPerPage}
              />
            </TableRow>
            <TableRow>
              <StyledCell align="center">
                <span>Job ID</span>
              </StyledCell>
              <StyledCell align="center">
                <span>Job Name</span>
              </StyledCell>
              <StyledCell align="center">
                <span>User ID</span>{" "}
              </StyledCell>
              <StyledCell align="center">
                <span>Class</span>
              </StyledCell>
              <StyledCell align="center">
                <span>Status</span>{" "}
              </StyledCell>
              <StyledCell align="center">
                <span>Waiting Reason</span>
              </StyledCell>
              <StyledCell align="center">
                <span>Return Code</span>
              </StyledCell>
              <StyledCell align="center">
                <span>Node Name</span>
              </StyledCell>
              <StyledCell align="center">
                <span>Submit Date/Time</span>
              </StyledCell>
              <StyledCell align="center">
                <span>Start Date/Time</span>
              </StyledCell>
              <StyledCell align="center">
                <span>End Date/Time</span>
              </StyledCell>
              <StyledCell align="center">
                <span>JCL Name</span>
              </StyledCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {JobInfo.map(({ number, jobName, userId, jobclass, status
                             , watingReason, returnCode, nodeName
                             , submitDate_Time, startDate_Time, endDate_Time, jclName 
                            }) => (
              <TableRow key={number} hover={true}>
                <StyledCell>
                  <span><Link to={`/batch/jobs/detail`}>{number}</Link></span>
                </StyledCell>
                <StyledCell>
                  <span>{jobName}</span>
                </StyledCell>
                <StyledCell>
                  <span>{userId}</span>
                </StyledCell>
                <StyledCell>
                  <span>{jobclass}</span>
                </StyledCell>
                <StyledCell>
                  <span>{status}</span>
                </StyledCell>
                <StyledCell>
                  <span>{watingReason}</span>
                </StyledCell>
                <StyledCell>
                  <span>{returnCode}</span>
                </StyledCell>
                <StyledCell>
                  <span>{nodeName}</span>
                </StyledCell>
                <StyledCell>
                  <span>{submitDate_Time}</span>
                </StyledCell>
                <StyledCell>
                  <span>{startDate_Time}</span>
                </StyledCell>
                <StyledCell>
                  <span>{endDate_Time}</span>
                </StyledCell>
                <StyledCell>
                  <span>{jclName}</span>
                </StyledCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default JobTable;
