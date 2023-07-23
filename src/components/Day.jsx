import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import styled from "styled-components";


export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

//   useEffect(() => {
//     const events = filteredEvents.filter(
//       (evt) =>
//         dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
//     );
//     setDayEvents(events);
//   }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "today"
      : "";
  }
  return (
    <Container>
    <div className="day-container border border-gray-200 flex flex-col">
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
      {/* <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div> */}
    </div>
    </Container>
  );
}

const Container = styled.div`
    .day-container{
        display: flex;
        flex-direction: column;
        width: 5rem;
        height: 5rem;
        border: 1px solid lightgrey;
        align-items: center;
    }
    header{
        text-align: center;
    }
    .weekday{
        font-size: .9rem;
        margin-top: .25rem;
    }
    .date{
        font-size: .9rem;
        padding: .25rem;
        margin: .25rem 0;
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