import { Fragment, useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import styled from "styled-components";
import CalendarHeader from "./components/CalendarHeader";
import Year from "./components/Year";
import GlobalContext from "./context/GlobalContext";
import { getMonth, getYear } from "./utils/calendar.js";
import AddLabels from "./components/AddLabels";

function App() {
  const {
    monthIndex,
    view,
    currentMonth,
    currentYear,
    setCurrentYear,
    setCurrentMonth,
    yearIndex,
    active,
    setActive
  } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    setCurrentYear(getYear(yearIndex));
  }, [yearIndex]);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <Container>
      <Fragment>
        <Navbar />
        <CalendarHeader />
        <div className="cal">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="cal-view">
            {view ? (
              <Month month={currentMonth} />
            ) : (
              <Year monthCount={currentYear} />
            )}
          </div>
        </div>
        <AddLabels />
      </Fragment>
    </Container>
  );
}

export default App;

const Container = styled.div`
  .cal {
    position: relative;
    height: 100%;
${'' /* overflow: hidden; */}
  }
  .cal-view {
    ${'' /* display: flex; */}
    padding-left: 18rem;
  }
  @media screen and (max-width: 800px){
    .sidebar{
      display: none;
    }
    .cal-view{
      padding: 0;
    }
  }
`;
