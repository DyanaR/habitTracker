import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/fullSidebar/Sidebar";
import Month from "./components/Month";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Navbar />
      <div className="cal">
      <Sidebar />
      <Month />
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
.cal{
  display: flex
  }
    
`;