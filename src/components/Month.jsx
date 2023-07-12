import dayjs from "dayjs";
import React, { useState } from "react";
import cn from "./cn";
import { generateDate, generateMonth, months } from "./calendar.js";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styled from "styled-components";

const colours = ["","red", "blue", "orange", "yellow", "pink", "green"]


export default function Calendar() {
	
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  const currentDate = dayjs();

  const [today, setToday] = useState(currentDate);
  const [state, setState] = useState(false);
  const [expand, setExpand] = useState(false);
  const [selectedColourIndex, setColourIndex] = useState(0);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [value, setValue] = useState("grey");


  const nextColour = () => {
    const newColourIndex = selectedColourIndex + 1;
    if (colours[newColourIndex]) 
        setColourIndex(newColourIndex);
    else
        setColourIndex(0);
}

const changeValue = (colors) => {setValue(colors)};

  
  const yearTitle = today.year();
  const monthTitle = months[today.month()];
 

	return (
 
    <Container>
    
      <div className="heading">
        <div className="toggles">
        <button onClick={() => {
            setToday(currentDate)
          }}>Today</button>
          <GrFormPrevious onClick={() => {
           {state? setToday(today.month(today.month() -1)): setToday(today.year(today.year() -1))} ;
          }}/>
          
          <GrFormNext onClick={() => {
            {state? setToday(today.month(today.month() +1)) : setToday(today.year(today.year() +1))};
          }} />
                  <h3>{state? monthTitle + " " + yearTitle : yearTitle }</h3>
        </div>
     
        <div class="dropdown">
          <button type="button" onClick={()=>{setExpand(!expand)}} >{state? "Month" : "Year"}
          </button>
          <ul onClick={()=>{setExpand(!expand)}} className={'dropdown-menu ' + (expand ? 'active' : 'inactive')}>
            <li><a href="#" onClick={() => {setState(true);}}>Month</a></li>
            <li><a href="#" onClick={() => {setState(false);}}>Year</a></li>
          </ul>
        </div>
      </div>
    
      <div className="calendar">

      {state? 
      <div className="month-calendar">
        <div className="weekdays">
          {days.map((day, index) => {
              return <div className="days" key={index}>
                {day}
              </div>
          })}
        </div>
      <div className="month">
          {generateDate(today.month(), today.year()).map(({date, currentMonth, today}, index ) => {
            return <div 
                  onClick={() => {nextColour(); setSelectDate(date)}} 
                  style={selectDate.toDate().toDateString() === date.toDate().toDateString()? {backgroundColor: colours[selectedColourIndex]} : {}} 
                  className={cn(
                      currentMonth? "current-dates" : "extra-dates", 
                      today? "today" : "",
                      )} 
                  key={index}> 
              {date.date()}
            </div>
            
          })}
      </div> 
      </div> 
      
      :
               
      <div className="year">
       {generateMonth().map(({month}, index) =>  {
        return <div key={index} className="month">
        <div className="year-calendar">
        <div className="year-weekdays">
          {days.map((day, index) => {
              return <div className="days" key={index}>
                {day}
              </div>
          })}
        </div>
        <div className="month">
        {/* can parameters in generateDate just be deleted? nothing in there? */}
          {generateDate(month.month(), today.year()).map(({date, currentMonth, today}, index ) => {

            return <div  className={cn(currentMonth? "year-current-dates" : "year-extra-dates", today? "today" : "" )} key={index}> 
              {date.date()}
            </div>
          })}
          </div>
      </div>
        </div>
       })}

      </div>
      }
      </div>
    </Container>
	);
}


const Container = styled.div`
.calendar{
  position: relative;
  display: flex;
  background-color: var(--color-white);
  ${'' /* width: 100%; */}
  justify-content: center;
  ${'' /* align-items: center; */}
  ${'' /* width: 100%; */}
}

.heading{
    background-color: var(--color-white);
    display: flex;  
    justify-content: space-between;
    ${'' /* width: 100%; */}
    padding: .5rem 2rem;
    ${'' /* align-items: center; */}
    gap: 2rem;
    ${'' /* max-width: none;  */}
    }
    .menu-items{
    background-color: red;
    display: flex;
    flex-direction: column;
    }
    button{
        background-color: var(--color-white);
        width: max-content;
        display: inline-block;
        color: var(--color-text);
        padding: 0.4rem .6rem;
        border-radius: 0.2rem;
        cursor: pointer;
        border: 1px solid var(--color-text);
        transition: var(--transition);
    }
    ul{
    list-style-type: none; 
    }
    a{
    color: var(--color-text);
    text-decoration: none;
    font-size: .8rem;
    }
    .dropdown-menu{
            position: absolute;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: .5rem;
            background-color: var(--color-white);
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            z-index: 1;
        }
    .dropdown-menu.active{
            visibility: visible;
        }
        .dropdown-menu.inactive{
            visibility: hidden;
        }
    .toggles{
    display: flex;
    ${'' /* justify-content: right; */}
    align-items: center;
    font-size: 1.2rem;
    gap: 1rem
    }
.month-calendar{
  ${'' /* margin: 1rem; */}

}

.month{
  ${'' /* margin-bottom: 1rem; */}
  background-color: white;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  ${'' /* gap: 1rem; */}
  text-align: center;
  ${'' /* border: 1px solid black; */}
}
.current-dates{
  cursor: pointer; 
  border: 1px solid black;
  padding: 1.5rem;
}
.year-current-dates{
  cursor: pointer; 
  border: 1px solid black;
  padding: .2rem;
}
.current-dates:hover, .year-current-dates:hover{
  background-color:  rgb(204,204,204);
}
.extra-dates{
  cursor: pointer; 
  border: 1px solid black;
  padding: 1.5rem;
  color: var(--color-text-variant);
}
.year-extra-dates{
  cursor: pointer; 
  border: 1px solid black;
  padding: .2rem;
  color: var(--color-text-variant);
}
.extra-dates:hover, .year-extra-dates:hover{
  ${'' /* transition: all; */}
  background-color: rgb(204,204,204);
}
.days{
  border: 1px solid black;
}
.year-weekdays{
  border: 1px solid black;
  margin-bottom: 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  ${'' /* gap: 1rem; */}
}
.weekdays{
  border: 1px solid black;
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

.year{
  display: grid;
  ${'' /* width: 100%; */}
  grid-template-columns: repeat(4, 0fr);
  ${'' /* gap: 0rem; */}
  justify-content: center;
  column-gap: 3%;
  row-gap: 3%;
  position: absolute;
}

`;
