import styled from "styled-components";
import TitleBar from "../../components/common/TitleBar";
import JobDetailInfo from "../../components/batch/JobDetailInfo";
import JobSpools from "../../components/batch/JobSpools";
import JobSteps from "../../components/batch/JobSteps";
import JobDDs from "../../components/batch/JobDDs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 220px);
  height: calc(100vh - 55px);
`;

const PageContainer = styled(Container)`
  padding: 20px;
  overflow-y: scroll;
`;

const JobDetailExtraInfo = styled.div`
  /* background-color: #f7f9fb; */
`;

function JobDetail({ title }) {
  return (
    <Container>
      <TitleBar title={title} />
      <PageContainer>
        <JobDetailInfo />
        <JobDetailExtraInfo>
          <JobSpools />
          <JobSteps />
          <JobDDs />
        </JobDetailExtraInfo>
      </PageContainer>
    </Container>
  );
}

export default JobDetail;
