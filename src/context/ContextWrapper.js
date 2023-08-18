import { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import { getMonth, getYear } from "../utils/calendar";
import { colours } from "./../utils/calendar.js";

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}

function initEvents() {
  const storageHabits = localStorage.getItem("savedEvents");
  const parsedHabits = storageHabits ? JSON.parse(storageHabits) : [];
  return parsedHabits;
}

export default function ContextWrapper(props) {
  const [expand, setExpand] = useState(false); //used
  const [today, setToday] = useState(dayjs()); //not used
  const [view, setView] = useState(false); //used
  const [selectedColourIndex, setColourIndex] = useState(0); //not used
  const [daySelected, setDaySelected] = useState(dayjs()); //not used
  const [monthIndex, setMonthIndex] = useState(dayjs().month()); //used
  const [yearIndex, setYearIndex] = useState(dayjs().year()); //used
  const [currentMonth, setCurrentMonth] = useState(getMonth()); //used
  const [currentYear, setCurrentYear] = useState(getYear()); //used
  const [colorLabel, setColorLabel] = useState(0);
  const [title, setTitle] = useState("");
  const [selectColor, setSelectedColor] = useState(colours[0]);
  const [counter, setCounter] = useState(0)
  // const [colorValue, setColorValue] = useState(colours[0]);
  // const [labels, setLabels] = useState([
  //   { dropdown: selectColor, service: "" },
  // ]);
  const [labels, setLabels] = useState([{ service: "" }]);
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  //anytime savedHbits changes, it saves directly into localstorage
  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        yearIndex,
        setYearIndex,
        currentYear,
        currentMonth,
        setCurrentMonth,
        currentYear,
        setCurrentYear,
        expand,
        setExpand,
        today,
        setToday,
        view,
        setView,
        selectedColourIndex,
        setColourIndex,
        daySelected,
        setDaySelected,
        colorLabel,
        setColorLabel,
        title,
        setTitle,
        labels,
        setLabels,
        selectColor,
        setSelectedColor,
        dispatchCalEvent,
        // colorValue,
        // setColorValue,
        counter,
        setCounter,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
