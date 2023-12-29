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
  const [view, setView] = useState(true); //used
  const [daySelected, setDaySelected] = useState(dayjs()); // used in labels,
  const [monthIndex, setMonthIndex] = useState(dayjs().month()); // used
  const [yearIndex, setYearIndex] = useState(dayjs().year()); // used
  const [currentMonth, setCurrentMonth] = useState(getMonth()); // used
  const [currentYear, setCurrentYear] = useState(getYear()); //used
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState("Alcohol Intake");
  const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );
  const [colorObject, setColorObject] = useState([
    {
      id: uuidv4(),
      colorCode: "#738A6E",
      colorName: "None",
    },
    {
      id: uuidv4(),
      colorCode: "#A0C2DD",
      colorName: "1-3",
    },
    {
      id: uuidv4(),
      colorCode: "#ECC7A1",
      colorName: "4-6",
    },
    {
      id: uuidv4(),
      colorCode: "#D9454A",
      colorName: "7+",
    },
    {
      id: uuidv4(),
      colorCode: "#808080",
      colorName: "Blackout",
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
        // currentYear,
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
        dispatchCalEvent,
        //color dict
        colorObject,
        setColorObject,
        statObject,
        setStatObject,
        active,
        setActive,
        title,
        setTitle
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}