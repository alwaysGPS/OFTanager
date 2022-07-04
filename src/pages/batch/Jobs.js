import useState from "react";
import styled from "styled-components";
import TitleBar from "../../components/common/TitleBar";

// SerachCondition
import SearchCondition from "../../components/batch/SearchCondition";
import 'bootstrap/dist/css/bootstrap.min.css'

// DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

// JobTable
import JobTable from "../../components/batch/JobTable";

const OutterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 220px);
  height: 100vh;
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
      <SearchCondition>
      </SearchCondition>
      <JobTable/>
    </OutterContainer>
  );
}

export default Jobs;
