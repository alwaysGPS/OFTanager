import styled from "styled-components";
import TitleBar from "../../components/common/TitleBar";

// JobTable
import JobTable from "../../components/batch/JobTable";

// Date Picker
import SearchCondition from "../../components/batch/SearchCondition";



const OutterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 220px);
  height: 100vh;
`;

function Jobs({ title }) {
  return (
    <OutterContainer>
      <TitleBar title={title} />
      <SearchCondition>
      </SearchCondition>
      <JobTable/>
    </OutterContainer>
  );
}

export default Jobs;
