import { Fragment, useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import styled from "styled-components";
import CalendarHeader from "./components/CalendarHeader";
import Year from "./components/Year";
import GlobalContext from "./context/GlobalContext";
import { getMonth, getYear } from "./utils/calendar.js";

function App() {
  const {
    monthIndex,
    view,
    currentMonth,
    currentYear,
    setCurrentYear,
    setCurrentMonth,
    yearIndex,
  } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    setCurrentYear(getYear(yearIndex));
  }, [yearIndex]);

  return (
    <Container>
      <Fragment>
        <Navbar />
        <CalendarHeader />
        <div className="cal">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="month">
            {view ? (
              <Month month={currentMonth} />
            ) : (
              <Year monthCount={currentYear} />
            )}
          </div>
        </div>
      </Fragment>
    </Container>
  );
}

export default App;

const Container = styled.div`
  .cal {
  }
  .month {
  }
  .sidebar {
    float: left;
  }
`;
