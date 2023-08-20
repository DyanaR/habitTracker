import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { BsTrash } from "react-icons/bs";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import Dropdown from "./Dropdown";
import { v4 as uuidv4 } from "uuid";

export default function Labels() {
  const {
    // selectColor,
    daySelected,
    dispatchCalEvent,
    // selectedEvent,
    labels,
    colorObject,
    setColorObject,
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
//to save in local storage
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const calendarEvent = {
  //     title,
  //     colorTitler: { labels, selectColor },
  //     label: selectColor,
  //     day: daySelected.valueOf(),
  //     // id: selectedEvent ? selectedEvent.id : Date.now(),
  //   };
  //   // to delete color labels
  //   const calendarTitle = {
  //     colorTitle: labels,
  //   };
  //   // if (selectedEvent) {
  //   //   dispatchCalEvent({ type: "update", payload: calendarEvent });
  //   // } else {
  //   //   dispatchCalEvent({ type: "push", payload: calendarEvent });
  //   // }
  // }

  const handleLabelAdd = () => {
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

  return (
    <Container>
      <div className="habits">
        <button onClick={() => handleLabelAdd()}>
          <AiOutlinePlus />
          Add Color
        </button>
        <form className="habits-form">
          <input
            type="text"
            name="title"
            placeholder="Add title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>{daySelected.format("dddd, MMMM DD")}</p>
          <div>
            {colorObject.map((color, index) => (
              <div key={index} className="labels">
                <div className="colors">
                  <Dropdown color={color} />
                </div>
                <input
                  type="text"
                  name="color-title"
                  placeholder="color title"
                  value={color.colorName}
                  required
                  onChange={(e) => handleLabelChange(e, color)}
                />
                <div className="remove">
                  <button
                    type="button"
                    onClick={() => handleLabelRemove(color)}
                    className="remove-btn"
                  >
                    <span>
                      <BsTrash />
                    </span>
                  </button>
                </div>
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
  .habits-form {
  }
  .colors {
    padding: .5rem  0;
    gap: 0.5rem;
    padding: 0.5rem 0;
    display: grid;
    grid-template-columns: repeat(5, 0fr);
  }
  .labels {
    display: flex;
    padding: 0.5rem 0;
  }
  input {
    margin: 0.5rem 0;
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
