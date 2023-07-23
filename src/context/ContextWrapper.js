import { useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import { getMonth, getYear } from "../utils/calendar";

export default function ContextWrapper(props) {
  const [expand, setExpand] = useState(false);
  const [today, setToday] = useState(dayjs());
  const [view, setView] = useState(false);
  const [selectedColourIndex, setColourIndex] = useState(0);
  const [selectDate, setSelectDate] = useState(dayjs());
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [yearIndex, setYearIndex] = useState(dayjs().year());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [currentYear, setCurrentYear] = useState(getYear());

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
