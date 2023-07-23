import dayjs from "dayjs";
import React from "react";
import { getYear, getMonth } from "../utils/calendar.js";

const GlobalContext = React.createContext({
  currentMonth: getMonth(),
  setCurrentMonth: () => {},
  monthIndex: 0,
  setMonthIndex: () => {},
  yearIndex: dayjs().year(),
  setYearIndex: () => {},
  currentYear: getYear(),
  setCurrentYear: () => {},
  expand: false,
  setExpand: () => {},
  today: dayjs(),
  setToday: () => {},
  view: false,
  setView: () => {},
  selectedColourIndex: 0,
  setColourIndex: () => {},
  selectDate: dayjs(),
  setSelectDate: () => {},
});

export default GlobalContext;
