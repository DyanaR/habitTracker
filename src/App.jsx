import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/fullSidebar/Sidebar";
import Month from "./components/Month";
import styled from "styled-components";
import CalendarHeader from "./components/CalendarHeader";

function App() {
  return (
    <Container>
      <Navbar />
      <div className="cal">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="month">
        <Month />
      </div>
      </div>
     
    </Container>
  );
}

export default App;

const Container = styled.div`
.cal{
  }
  .month{
  }
  .sidebar{
    float: left;
  }

    
`;