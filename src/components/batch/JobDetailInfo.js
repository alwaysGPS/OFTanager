import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { Button, RefreshButton } from "../../components/common/Button";
import styled from "styled-components";
import { Box } from "../common/Box";

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const JobDetailTitleBox = styled(Box)`
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

function JobDetailInfo() {
  const jobInfo = {
    "Job ID": "JOB00074",
    "Job Name": "HW02",
    "Job Status": "Done",
    "Job Class": "A",
    Priority: "5",
    User: "Root",
    "Job Group": "",
    Index: "0",
    PID: "12518",
    Ready: "2022/06/22 23:19:59",
    Start: "2022/06/22 23:20:09",
    End: "2022/06/22 23:20:10",
    Usage: "Process - 1s CPU - (0s, 0%) MEM - 0 bytes",
    "Waiting Reason": "-",
    "Node Name": "NODE1",
    "JCL Path":
      "/home/oframe7/OpenFrame/volume_DEFVOL/SYS1.JCLLIB/homework2.jcl",
  };

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
        </Buttons>
      </InfoHeader>
      <div className="infoTable"></div>
    </div>
  );
}

export default JobDetailInfo;
