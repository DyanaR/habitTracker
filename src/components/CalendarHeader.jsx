import React, { useState } from "react";
import { Container } from 'react-bootstrap'
import styled from "styled-components";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import dayjs from "dayjs";
import {months } from "./calendar.js";



const CalendarHeader = () => {

    const currentDate = dayjs();

    const [today, setToday] = useState(currentDate);
    const [state, setState] = useState(false);
    const [expand, setExpand] = useState(false);
  
    const yearTitle = today.year();
    const monthTitle = months[today.month()];

  return ( 
    <Box>
     <div className="cont">
        hello
       
     </div>
     <div className="bye">
            bye
        </div>
    </Box>
  )
}

const Box = styled.div`
.cont{
    background-color: red;
}
    .bye{
        width: 2rem;
    }
        
`;

export default CalendarHeader
