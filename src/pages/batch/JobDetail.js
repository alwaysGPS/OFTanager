import styled from "styled-components";
import TitleBar from "../../components/common/TitleBar";

import JobDetailInfo from "../../components/batch/JobDetailInfo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 220px);
`;

const PageContainer = styled(Container)`
  padding: 20px;
  /* background-color: lightblue; */
`;

function JobDetail({ title }) {
  return (
    <Container>
      <TitleBar title={title} />
      <PageContainer>
        <JobDetailInfo></JobDetailInfo>
        <div className="JobDetailExtraInfo">
          <div className="spools"></div>
          <div className="step"></div>
          <div className="DDs"></div>
        </div>
      </PageContainer>
    </Container>
  );
}

export default JobDetail;
