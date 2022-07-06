// DatePicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react";

// react-bootstrap
// import { div, Col } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

function DatePickerComponent () {
  const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={(date) => setStartDate(date)} 
      />
    );
  };
  

export default DatePickerComponent ;
