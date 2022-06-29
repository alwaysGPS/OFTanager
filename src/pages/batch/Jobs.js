import { Link } from "react-router-dom";
import styled from "styled-components";
import SubMenu from "../../components/common/SubMenu";
import TitleBar from "../../components/common/TitleBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 220px);
`;

function Jobs({ title }) {
  return (
    <Container>
      <TitleBar title={title} />
      <Link to={`/batch/jobs/detail`}>JobDetail</Link>
    </Container>
  );
}

export default Jobs;
