import { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import { getMonth, getYear } from "../utils/calendar";

export default function ContextWrapper(props) {
  const [expand, setExpand] = useState(false); //used
  const [today, setToday] = useState(dayjs()); //not used
  const [view, setView] = useState(false); //used
  const [selectedColourIndex, setColourIndex] = useState(0); //not used
  const [selectDate, setSelectDate] = useState(dayjs()); //not used
  const [monthIndex, setMonthIndex] = useState(dayjs().month()); //used
  const [yearIndex, setYearIndex] = useState(dayjs().year()); //used
  const [currentMonth, setCurrentMonth] = useState(getMonth()); //used
  const [currentYear, setCurrentYear] = useState(getYear()); //used

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
        selectDate,
        setSelectDate,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
