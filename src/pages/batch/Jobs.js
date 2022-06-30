import { Link, Route } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import SubMenu from "../../components/common/SubMenu";
import TitleBar from "../../components/common/TitleBar";

// react-bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

// DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const OutterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 220px);
  height: 100vh;
`;

const StyledContainer = styled(Container)`
  background-color: rgb(247, 249, 251);
  /* flex-wrap: nowrap; */
  max-width: 100%;
  padding : 20px;
  
  .Row {
    margin : 5px;
  }

  .Col {
    min-width: 250px;
    /*
    height: 48px;
    display: flex;
    flex-direction: column; 
    */
  }
  
  .scTitle { 
    color: #3f699d;
    font-weight: bold;
    }

  .DatePickerComponent {
    width: 110px;
  }
`;

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      dateFormat="yyyy/MM/dd"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};


function SerchCondition() {
  return (
    <StyledContainer>
      <Row lg={4}>
        <Col className="col-2">
          <span className="scTitle">Job ID (From)</span><br/>
          <input type="text" placeholder="Job ID" id="jobId" />
        </Col>
        <Col className="col-2">
          <span className="scTitle">Job Name</span><br/>
          <input type="text" placeholder="Job Name" id="jobName" />
        </Col>
        <Col className="col-2">
          <span className="scTitle">User ID</span><br/>
          <input type="text" placeholder="User ID" id="userId" />
        </Col>
      </Row>
      <Row lg={2}>
        <Col className="col-2">
          <span className="scTitle">Submit Date</span><br/>
          <DatePickerComponent></DatePickerComponent> ~
          <DatePickerComponent></DatePickerComponent>
        </Col>
        <Col>
          <span className="scTitle">Status</span><br/>
          {/* <CheckboxLabels></CheckboxLabels> */}
        </Col>
      </Row>
    </StyledContainer>
  );
}

function CheckboxLabels() {
  const checkBoxList = [ 
    {id : "1", name : "Working"}
    , {id : "2", name : "Done"}
    , {id : "3", name : "Error"}
    , {id : "4", name : "Flush"}
    , {id : "5", name : "Start"}
    , {id : "6", name : "Hold"}
    , {id : "7", name : "Suspend"}
    , {id : "8", name : "Stop"} ];
  }; 
//     const [isCheckAll, setIsCheckAll] = useState(false);
//     const [isCheck, setIsCheck] = useState([]);
//     const [list, setList] = useState([]);
  
//     useEffect(() => {
//       setList(Catalogues);
//     }, [list]); 
  
//     const handleSelectAll = e => {
//       setIsCheckAll(!isCheckAll);
//       setIsCheck(list.map(li => li.id));
//       if (isCheckAll) {
//         setIsCheck([]);
//       }
//     };
  
//     const handleClick = e => {
//       const { id, checked } = e.target;
//       setIsCheck([...isCheck, id]);
//       if (!checked) {
//         setIsCheck(isCheck.filter(item => item !== id));
//       }
//     };
  
  
//     const catalog = list.map(({ id, name }) => {
//       return (
//         <>
//           <Checkbox
//             key={id}
//             type="checkbox"
//             name={name}
//             id={id}
//             handleClick={handleClick}
//             isChecked={isCheck.includes(id)}
//           />
//           {name}
//         </>
//       );
//     });
  
//     return (
//       <div>
//         <Checkbox
//           type="checkbox"
//           name="selectAll"
//           id="selectAll"
//           handleClick={handleSelectAll}
//           isChecked={isCheckAll}
//         />
//         Select All
//         {catalog}
//       </div>
//     );
//   };
  
    
    


function Jobs({ title }) {
  return (
    <OutterContainer>
      <TitleBar title={title} />
      <SerchCondition>
        
      </SerchCondition>

      <br/><br/><br/>
      <Link to={`/batch/jobs/detail`}>JobDetail</Link>
    </OutterContainer>
  );
}

export default Jobs;
