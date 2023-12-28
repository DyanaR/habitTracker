import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HabitTracker from "./pages/HabitTracker";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import styled from "styled-components";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  return (
    <Container>
    <AuthContextProvider>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<ProtectedRoutes><HabitTracker /></ProtectedRoutes>} />
        <Route
          path="/Account"
          element={
            <ProtectedRoutes>
              <Account />
            </ProtectedRoutes>
          }
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </AuthContextProvider>
    </Container> 
  );
}

export default App;

const Container = styled.div``;


