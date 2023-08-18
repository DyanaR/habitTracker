import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { ReactComponent as Square } from "../../assets/square.svg";
import { colours } from "../../utils/calendar.js";
import { BsTrash, BsCheck } from "react-icons/bs";
import GlobalContext from "../../context/GlobalContext";

const Dropdown = () => {
  const [expand, setExpand] = useState(false);

  const [colorValue, setColorValue] = useState("lightGrey");
  const [selectColor, setSelectedColor] = useState("lightGrey");


  const changeValue = (colours) => {
    setColorValue(colours);
  };

  const {
    // selectColor,
    // setSelectedColor,
    colorLabel,
    setColorLabel,
    title,
    setTitle,
  } = useContext(GlobalContext);

  // let menuRef = useRef();

  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!menuRef.current.contains(e.target)) {
  //       setExpand(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  const hand = (e) => {};

  return (
    <Container>
      <div className="menu">
        <div
          className="dropdown"
          // ref={menuRef}
        >
          <button
            type="button"
            onClick={() => {
              setExpand(!expand);
            }}
            style={{
              backgroundColor: colorValue,
              height: "20px",
              width: "20px",
              borderRadius: "2px",
            }}
          ></button>

          <div
            onClick={() => {
              setExpand(!expand);
            }}
            className={"dropdown-menu " + (expand ? "active" : "inactive")}
          >
          <div className="colors">
            {colours.map((color, i) => (
              <span
                key={i}
                onClick={() => {
                  changeValue(color);
                  setSelectedColor(color);
                }}
                style={{
                  backgroundColor: color,
                  height: "20px",
                  width: "20px",
                  borderRadius: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                }}
              >
                {/* value={color} */}
                {selectColor === color && <BsCheck />}
              </span>
            ))}
            </div>
          </div>
        </div>
        {/* <div className="label">
        
          <input 
            type="text" 
            placeholder="Color Label"
            name="color-label"
            value={title}
          onChange={(e) => setTitle(e.target.value)}
             />
        </div> */}
        {/* <BsTrash onClick={() => {setColorLabel(colorLabel-1)}} /> */}
     </div>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  .menu {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .dropdown {
    padding: 0.5rem 0;
    position: relative;
  }
  button {
    border: none;
    cursor: pointer;
    appearance: none;
  }
  .dropdown-menu {
    position: absolute;
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    background-color: var(--color-white);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .dropdown-menu.active {
    visibility: visible;
    display: grid;
    grid-template-columns: repeat(5, 0fr);
  }
  .dropdown-menu.inactive {
    visibility: hidden;
  }
  button,
  a {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
