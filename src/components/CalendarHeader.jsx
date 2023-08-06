import React, { useContext } from "react";
import { GrFormNext, GrFormPrevious} from "react-icons/gr";
import {MdArrowDropDown} from "react-icons/md"
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
import styled from "styled-components";


const CalendarHeader = () => {
  const {
    expand,
    setExpand,
    monthIndex,
    setMonthIndex,
    yearIndex,
    setYearIndex,
    view,
    setView,
  } = useContext(GlobalContext);

  const yearTitle = dayjs(new Date(yearIndex, dayjs().month())).format("YYYY");
  const monthTitle = dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM");

  return (
    <Container>
      <div className="heading">
        <div className="toggles">
          <button
            onClick={() => {
              setMonthIndex(dayjs().month());
              setYearIndex(dayjs().year());
            }}
          >
            Today
          </button>
          <GrFormPrevious
            onClick={() => {
              {
                view
                  ? setMonthIndex(monthIndex - 1)
                  : setYearIndex(yearIndex - 1);
              }
            }}
          />

          <GrFormNext
            onClick={() => {
              {
                view
                  ? setMonthIndex(monthIndex + 1)
                  : setYearIndex(yearIndex + 1);
              }
            }}
          />
          <h3>{view ? monthTitle + " " + yearTitle : yearTitle}</h3>
        </div>

        <div class="dropdown">
          <button className="dropdown-btn"
            type="button"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {view ? "Month" : "Year"}
            <MdArrowDropDown style={{fontSize: '1.5rem'}}/>
          </button>
          <ul
            onClick={() => {
              setExpand(!expand);
            }}
            className={"dropdown-menu " + (expand ? "active" : "inactive")}
          >
            <li>
              <a
                href="#"
                onClick={() => {
                  setView(true);
                }}
              >
                Month
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setView(false);
                }}
              >
                Year
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default CalendarHeader;

const Container = styled.div`
  .heading {
    background-color: var(--color-white);
    display: flex;
    justify-content: space-between;
    ${"" /* width: 100%; */}
    padding: .5rem 2rem;
    ${"" /* align-items: center; */}
    gap: 2rem;
    ${"" /* max-width: none;  */}
  }
  .toggles {
    display: flex;
    ${"" /* justify-content: right; */}
    align-items: center;
    font-size: 1.2rem;
    gap: 1rem;
  }
  .dropdown-btn{
    display: flex;
    align-items: center; 
  }
  .dropdown-menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
    background-color: var(--color-white);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .dropdown-menu.active {
    visibility: visible;
  }
  .dropdown-menu.inactive {
    visibility: hidden;
  }
  button {
    background-color: var(--color-white);
    width: max-content;
    display: inline-block;
    color: var(--color-text);
    padding: 0.4rem 0.6rem;
    border-radius: 0.2rem;
    cursor: pointer;
    border: 1px solid var(--color-text);
    transition: var(--transition);
  }
  a {
    color: var(--color-text);
    text-decoration: none;
    font-size: 0.8rem;
  }
  ul {
    list-style-type: none;
  }
`;
