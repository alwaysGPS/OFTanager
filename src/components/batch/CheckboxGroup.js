// import useState from "react";
import { FormControlLabel, Checkbox, Box} from '@mui/material'

// react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

function CheckboxGroup() {
  const checkboxLists = [ 
    {id : "0", name : "Working"}
    , {id : "1", name : "Done"}
    , {id : "2", name : "Error"}
    , {id : "3", name : "Flush"}
    , {id : "4", name : "Start"}
    , {id : "5", name : "Hold"}
    , {id : "6", name : "Suspend"}
    , {id : "7", name : "Stop"} 
  ];
  
  // Select All을 시도하던 중
  const children = checkboxLists.map((checkbox) => (
    <FormControlLabel 
     key = {checkbox.id}
     control={<Checkbox defaultChecked />} 
     label={checkbox.name}
    >
    <span>{checkbox.name}</span>
    </FormControlLabel>
    )
  );

  return (
    <Box sx={{display: 'flex', flexDirection: 'row'}}>
      {children}
    </Box>
  )
}

export default CheckboxGroup;