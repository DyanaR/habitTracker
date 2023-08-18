import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import styled from "styled-components";
import { colours } from "../utils/calendar";

export default function Day({ day, rowIdx }) {
  // const [dayEvents, setDayEvents] = useState([]);
  const { setDaySelected, counter, setCounter } = useContext(GlobalContext);

  const [selectedColourIndex, setColourIndex] = useState(0);

  const nextColour = () => {
    const newColourIndex = selectedColourIndex + 1;
    if (colours[newColourIndex]) setColourIndex(newColourIndex);
    else setColourIndex(0);
  };
  // const handleAdd = (backgroundColor) => {
  //   if(backgroundColor === "D9454A"){
  //     setCounter(counter + 1)
  //   }
  // }
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "today" : "";
  }
  return (
    <Container>
      <div
        onClick={() => {
          nextColour();
          setDaySelected(day);
        }}
        // onChange={() => handleAdd() }
        style={{ backgroundColor: colours[selectedColourIndex] }}
        className="day-container border border-gray-200 flex flex-col"
      >
        <header className="flex flex-col items-center">
          {rowIdx === 0 && (
            <p className="weekday text-sm mt-1">
              {day.format("ddd").toUpperCase()}
            </p>
          )}
          <p
            className={`date text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}
          >
            {day.format("DD")}
          </p>
        </header>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .day-container {
    display: flex;
    flex-direction: column;
    width: 5rem;
    height: 5rem;
    border: 1px solid lightgrey;
    align-items: center;
  }
  header {
    text-align: center;
  }
  .weekday {
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }
  .date {
    font-size: 0.9rem;
    padding: 0.25rem;
    margin: 0.25rem 0;
    width: 1.5rem;
    text-align: center;
  }
  .today {
    background-color: lightblue;
    border-radius: 9999px;
  }
  .today:hover {
    background-color: #cc0000;
  }
`;
