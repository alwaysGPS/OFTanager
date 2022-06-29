import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { Button, RefreshButton } from "../../components/common/Button";
import styled from "styled-components";
import { Box } from "../common/Box";
// import { Button } from "@mui/material";

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const JobDetailTitleBox = styled(Box)`
  margin-bottom: 20px;

  .job_name {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.subMenuText};
    font-weight: 700;
    padding-right: 10px;
  }
`;

const Buttons = styled.div`
  ${Button} {
    margin-left: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  font-size: 12px;
  font-weight: 700;

  tbody {
    display: flex;
    flex-wrap: wrap;
    border-top: solid 0.5px rgba(0, 0, 0, 0.1);
    border-bottom: solid 0.5px rgba(0, 0, 0, 0.1);

    tr {
      width: 50%;
      height: 35px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f1f1f1;
    }

    .jobinfo_subject {
      width: 153px;
      height: 100%;
      padding-left: 10px;
      display: flex;
      background-color: #f5f5f5;
      justify-content: flex-start;
      align-items: center;
    }

    .jobinfo_value {
      padding-left: 10px;
    }
  }
`;

function JobDetailInfo() {
  const jobInfo = [
    { subject: "Job ID", value: "JOB00074" },
    { subject: "Job Name", value: "HW02" },
    { subject: "Job Status", value: "Done" },
    { subject: "Job Class", value: "A" },
    { subject: "Priority", value: "5" },
    { subject: "User", value: "Root" },
    { subject: "Job Group", value: "" },
    { subject: "Index", value: "0" },
    { subject: "PID", value: "12518" },
    { subject: "Ready", value: "2022/06/22 23:19:59" },
    { subject: "Start", value: "2022/06/22 23:20:09" },
    { subject: "End", value: "2022/06/22 23:20:10" },
    { subject: "Usage", value: "Process - 1s CPU - (0s, 0%) MEM - 0 bytes" },
    { subject: "Waiting Reason", value: "-" },
    { subject: "Node Name", value: "NODE1" },
    {
      subject: "JCL Path",
      value: "/home/oframe7/OpenFrame/volume_DEFVOL/SYS1.JCLLIB/homework2.jcl",
    },
  ];

  return (
    <div>
      <InfoHeader>
        <JobDetailTitleBox>
          <span className="job_name">JOB00074</span>
          <RefreshButton>
            <span>
              <FontAwesomeIcon className="icon" icon={faRotateRight} />
              Refresh
            </span>
          </RefreshButton>
        </JobDetailTitleBox>
        <Buttons>
          <Button>
            <span>Start</span>
          </Button>
          <Button>
            <span>Hold</span>
          </Button>
          <Button>
            <span>Cancel</span>
          </Button>
          <Button>
            <span>Suspend</span>
          </Button>
          <Button>
            <span>Resume</span>
          </Button>
          <Button>
            <span>Stop</span>
          </Button>
          <Button>
            <span>Remove</span>
          </Button>
          {/* <Button variant="contained" disableElevation>
            Disable elevation
          </Button> */}
        </Buttons>
      </InfoHeader>

      {/* JobInfo Table */}
      <Table>
        <tbody>
          {jobInfo.map((content, index) => {
            return (
              <tr className="jobinfo_row">
                <th className="jobinfo_subject">{content.subject}</th>
                <td className="jobinfo_value">{content.value}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default JobDetailInfo;
