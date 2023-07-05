import dayjs from "dayjs";
import React, { useState } from "react";
import cn from "./cn";
import { generateDate, generateMonth, months } from "./calendar.js";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styled from "styled-components";


export default function Calendar() {
	
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  const currentDate = dayjs();

  const [today, setToday] = useState(currentDate);


  console.log(generateMonth());
	return (
 
    <Container>

      <div className="heading">
       
          <h3>{months[today.month()]}, {today.year()}</h3>
    

        <div className="toggles">
          <GrFormPrevious onClick={() => {
            setToday(today.month(today.month() -1));
          }}/>
          <h3 onClick={() => {
            setToday(currentDate)
          }}>Today</h3>
          <GrFormNext onClick={() => {
            setToday(today.month(today.month() +1));
          }} />
        </div>
      </div>
    
      <div className="weekdays">
        {days.map((day, index) => {
            return <div className="days" key={index}>
              {day}
            </div>
        })}
      </div>

      <div className="month">
      
        {generateDate(today.month(), today.year()).map(({date, currentMonth, today}, index ) => {

          return <div className={cn(currentMonth? "current-dates" : "extra-dates", today? "today" : "" )} key={index}> 
            {date.date()}
          </div>
        })}
      
      </div>

      <div className="year">
        {generateMonth(today.month(), today.year()).map((month, index ) => {

        return <div  key={index}> 
          {month.month()}
        </div>
        })}

      </div>
    </Container>
	);
}


const Container = styled.div`
.heading{
 display: flex;  
 justify-content: space-between;
}
.toggles{
  display: flex;
  justify-content: right;
}
.month{
  margin: 1rem;
  margin-top: 0;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  ${'' /* gap: 1rem; */}
  text-align: center;
  border: 1px solid black;

}
.current-dates{
  cursor: pointer; 
  border: 1px solid black;
  padding: .5rem;
}
.current-dates:hover{
  background-color:  rgb(204,204,204);
}
.extra-dates{
  cursor: pointer; 
  border: 1px solid black;
  padding: .5rem;
  color: grey;
}
.extra-dates:hover{
  ${'' /* transition: all; */}
  background-color: rgb(204,204,204);
}
.weekdays{
  border: 1px solid black;
  margin: 1rem;
  margin-bottom: 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  ${'' /* gap: 1rem; */}
}
.today{
  background-color: red;
}
.today:hover{
  background-color: #CC0000;
}
.days{
  border: 1px solid black;
}

`;
