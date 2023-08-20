import { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import { getMonth, getYear } from "../utils/calendar";
import { colours } from "./../utils/calendar.js";
import { v4 as uuidv4 } from "uuid";

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
  const [view, setView] = useState(false); //used
  const [daySelected, setDaySelected] = useState(dayjs()); // used in labels,
  const [monthIndex, setMonthIndex] = useState(dayjs().month()); // used
  const [yearIndex, setYearIndex] = useState(dayjs().year()); // used
  const [currentMonth, setCurrentMonth] = useState(getMonth()); // used
  const [currentYear, setCurrentYear] = useState(getYear()); //used
  const [selectColor, setSelectedColor] = useState(colours[0]);//used in labels,not needed once changes are made
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );
  const [colorObject, setColorObject] = useState([
    {
      id: uuidv4(),
      colorCode: "",
      colorName: "",
    },
  ]);
  const [statObject, setStatObject] = useState({
    aug: {
      id: uuidv4(),
      date: "",
      colorCode: "",
      colorName: "" //new
    },
    // August092023: {
    //   id: uuidv4(),
    //   date: "2023-08-18",
    //   colorCode: "#D6454A",
    // },
  });

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
        view,
        setView,
        daySelected,
        setDaySelected,
        selectColor, //delete soon
        setSelectedColor, //delete soon
        dispatchCalEvent,
        //color dict
        colorObject,
        setColorObject,
        statObject,
        setStatObject,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
