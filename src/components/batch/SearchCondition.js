import styled from "styled-components";

// react-bootstrap
//import { div, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// DatePicker
import DatePickerComponent from "../../components/batch/DatePickerComponent";

// Check Box
import CheckboxGroup from "../../components/batch/CheckboxGroup";

// Search Button
// import SearchButton from "../../components/batch/SearchButton";
import { RefreshButton, SearchButton } from "../../components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight, faSearch, faMinus} from "@fortawesome/free-solid-svg-icons";

const StyledContainer = styled.div`
  background-color: rgb(247, 249, 251);
  max-width: 100%;
  padding : 20px;
  
  .row {
    height: 70px;
    flex-wrap: nowrap;
    margin-bottom: 20px;
  }
  .col {
    width: 270px;
    margin-right: 15px;
  }

  .col input, .col-3 input {
    margin-top: 5px;
  }
  
  .datePicker {
    display: flex;
    align-items: center;
  }
  
  .datePicker input {
    width: 145px;
  };

  .scTitle { 
    color: #3f699d;
    font-weight: bold;
    margin-bottom: 10px;
    }

  .buttons {
    display: flex;
    margin-left: 100px;
    align-items: center;
  }

`;

function SearchCondition() {
  return (
    <StyledContainer>
      <div className="row">
        <div className="col">
          <span className="scTitle">Job ID (From)</span>
          <br />
          <input type="text" placeholder="Job ID" id="jobId" />
        </div>
        <div className="col">
          <span className="scTitle">Job Name</span>
          <br />
          <input type="text" placeholder="Job Name" id="jobName" />
        </div>
        <div className="col">
          <span className="scTitle">User ID</span>
          <br />
          <input type="text" placeholder="User ID" id="userId" />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <span className="scTitle">Submit Date</span>
          <br />
          <span className="datePicker">
            <DatePickerComponent /> 
            <span> ~ </span>
            <DatePickerComponent />
          </span>
        </div>
        <div className="col-6">
          <span className="scTitle">Status</span>
          <br />
          <CheckboxGroup />
        </div>
        <div className="col-3 buttons">
            <SearchButton>
              <span>
                <FontAwesomeIcon className="icon" icon={faSearch} />
                Search
              </span>
            </SearchButton>
            <RefreshButton>
              <span>
                <FontAwesomeIcon className="icon" icon={faRotateRight} />
                Refresh
              </span>
            </RefreshButton>
        </div>
      </div>
    </StyledContainer>
  );
}

export default SearchCondition ;
