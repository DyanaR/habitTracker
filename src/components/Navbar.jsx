import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Sidebar from "./Sidebar";
import Labels from "./Labels";
import Stats from "./Stats";

const Navbar = () => {
  const { active, setActive } = useContext(GlobalContext);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <Container>
      <div className="navbar">
        <div className="logo">
          <h1>Habit Tracker</h1>
        </div>
        <div className={active ? "slider active" : "slider"}>
          <div className="closed">
            <AiOutlineClose className="close" onClick={showMenu} />
          </div>
          <div className="login">
            <h3>Log in</h3>
            <h3>Sign Up</h3>
          </div>
        </div>
        <div className="menu-icon">
          <GiHamburgerMenu className="menu" onClick={showMenu} />
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  .navbar {
    background-color: var(--color-primary);
    color: var(--color-white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    box-shadow: 0 2px 3px var(--color-shadow);
    ${"" /* margin-bottom: 1rem; */}
    ${"" /* border-bottom: 1.3px solid var(--color-shadow); */}
  }
  ${
    "" /* .navbar-right {
    display: flex;
    gap: 2rem;
  } */
  }

  ${
    "" /* .slider .stats{
    display: none;
    padding: 0;
  } */
  }
  .login{
    display: flex;
    gap: 1rem;
  }
  .menu-icon{
    display: none;
    align-items: left;
}
   .menu-icon .menu {
    display: none;
    font-size: 2rem;
    cursor: pointer;
  }
  .closed .close {
    display: none;
    cursor: pointer;
    font-size: 2rem;
  }
  .navbar .icons {
    font-size: 1.5rem;
  }
  ${
    "" /* .slider .sidebar{
    position: static;
  } */
  }

  @media screen and (max-width: 800px) {
    .slider {
      ${"" /* display:flex; */}
      padding: 2.8rem 0;
      position: fixed;
      min-width: 78%;
      height: 100vh;
      background-color: var(--color-secondary);
      top: 0;
      right: -100%;
      z-index: 3;
      transition: 1s ease;
    }
    .slider.active {
      height: 100vh;
      min-height: 100%;
      top: 0;
      right: 0;
      transition: 1s ease;
      :root {
        -webkit-filter: blur(1px);
      }
    }

    .slider .login {
      display: flex;
      flex-direction: column;
      padding: 2rem 0;
      align-items: center;
      gap: 1rem;
    }

    .menu-icon .menu {
      display: block;
    }
    .menu-icon {
      display: block;
      align-items: right;
    }
    .menu-icon .menu {
      bottom: 1rem;
      display: block;
      font-size: 2rem;
      cursor: pointer;
    }
    .closed {
      display: flex;
      padding-right: 2rem;
      justify-content: end;
    }
    .closed .close {
      display: block;
      cursor: pointer;
      font-size: 2rem;
    }
  }
`;
