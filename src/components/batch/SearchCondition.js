import styled from "styled-components";

// react-bootstrap
//import { div, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const StyledContainer = styled.div`
  background-color: rgb(247, 249, 251);
  max-width: 100%;
  padding : 20px;
  
  .row {
    height: 50px;
    flex-wrap: nowrap;
  }
  .col {
    min-width: 250px;
  }
  
  input {
    
  }
  .scTitle { 
    color: #3f699d;
    font-weight: bold;
    margin-bottom: 10px;
    }

  .DatePickerComponent {
    width: 110px;
  }
`;

function SearchCondition() {
  return (
    <StyledContainer>
      <div className="row">
        <div className="col">
          <span className="scTitle">Job ID (From)</span><br/>
          <input type="text" placeholder="Job ID" id="jobId" />
        </div>
        <div className="col">
          <span className="scTitle">Job Name</span><br/>
          <input type="text" placeholder="Job Name" id="jobName" />
        </div>
        <div className="col">
          <span className="scTitle">User ID</span><br/>
          <input type="text" placeholder="User ID" id="userId" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <span className="scTitle">Submit Date</span><br/>
          {/* <DatePickerComponent></DatePickerComponent> ~
          <DatePickerComponent></DatePickerComponent> */}
        </div>
        <div>
          <span className="scTitle">Status</span><br/>
          {/* <CheckboxLabels></CheckboxLabels> */}
        </div>
      </div>
    </StyledContainer>
  );
}

export default SearchCondition ;
