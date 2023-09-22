import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { BsTrash } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import Dropdown from "./Dropdown";
import { v4 as uuidv4 } from "uuid";
import { NotificationManager } from "react-notifications";

export default function Labels() {
  const {
    // selectColor,
    daySelected,
    dispatchCalEvent,
    // selectedEvent,
    labels,
    colorObject,
    setColorObject,
    statObject
  } = useContext(GlobalContext);

  const [title, setTitle] = useState("");

  const handleLabelChange = (e, color) => {
    const { value } = e.target;
    const modifiedArray = colorObject.map((iterator) => {
      if (color.id === iterator.id) iterator.colorName = value;
      return iterator;
    });
    setColorObject(modifiedArray);
  };

  const handleLabelAdd = () => {
    if (colorObject.length === 6) {
      NotificationManager.error("Label limit has been reached.", "Failure");
      return;
    }
    setColorObject((prevState) => [
      ...prevState,
      {
        colorCode: "",
        colorName: "",
        id: uuidv4(),
        // count: 0,
      },
    ]);
  };

  const handleLabelRemove = (color) => {
    const { id } = color;
    const filteredColorArray = colorObject.filter(
      (iterator) => iterator.id !== id
    );
    setColorObject(filteredColorArray);
  };

    //to save in local storage
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const calendarEvent = {
  //     title,
  //     label: colorObject,
  //     stat: statObject,
  //     // id: selectedEvent ? selectedEvent.id : Date.now(),
  //   };
  //   dispatchCalEvent({ type: "push", payload: calendarEvent });
    // to delete color labels
    // const calendarTitle = {
    //   colorTitle: labels,
    // };
    // if (selectedEvent) {
    //   dispatchCalEvent({ type: "update", payload: calendarEvent });
    // } else {
    //   dispatchCalEvent({ type: "push", payload: calendarEvent });
    // }
  // }
  
  return (
    <Container>
      <div className="habits-container">
        <button onClick={() => handleLabelAdd()}>
          <AiOutlinePlus />
          Add Color
        </button>
        <form className="habits-form">
          <input
            type="text"
            name="title"
            placeholder="Habit Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="habit-info">
            {colorObject.map((color, index) => (
              <div key={index} className="labels">
                <div className="color-selection">
                  <Dropdown color={color} />
                </div>
                <input
                  type="text"
                  name="color-title"
                  placeholder="Color Title"
                  value={color.colorName}
                  required
                  onChange={(e) => handleLabelChange(e, color)}
                />
                {colorObject.length !== 1 && (
                  <div
                    className="remove"
                    type="button"
                    onClick={() => handleLabelRemove(color)}
                  >
                    <span>
                      <TiDelete style={{ cursor: "pointer" }} />
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <footer>
            {/* <button type="submit" onClick={handleSubmit}>
              Save
            </button> */}
          </footer>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .color-selection {
    display: flex;
    align-items: center;
  }
  .remove {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }
  .labels {
    display: flex;
    padding: 0.2rem, 0.5rem;
    gap: 0.5rem;
  }
  input {
    margin: 0.5rem 0;
  }
  input[type="text"] {
    padding-left: 1rem;
    border: none;
    height: 2rem;
    border-radius: 5px;
    background-color: var(--color-bg);
  }
  button {
    justify-content: center;
    background-color: var(--color-white);
    width: max-content;
    display: flex;
    color: var(--color-text);
    padding: 0.4rem 0.6rem;
    border-radius: 0.2rem;
    cursor: pointer;
    border: 1px solid var(--color-text);
    transition: var(--transition);
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2);
    gap: 0.3rem;
    margin-bottom: 0.5rem;
  }
  button:hover {
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  }
`;
