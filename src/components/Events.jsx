import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { colours } from "../utils/calendar";
import { BsTrash, BsCheck } from "react-icons/bs";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import Dropdown from "./fullSidebar/Dropdown";

export default function EventModal() {
  const {
    selectColor,
    setSelectedColor,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
    labels,
    setLabels,
  } = useContext(GlobalContext);

  //   const [title, setTitle] = useState(
  //     selectedEvent ? selectedEvent.title : ""
  //   );
  const [title, setTitle] = useState("");
  //   const [selectedLabel, setSelectedLabel] = useState(
  //     selectedEvent
  //       ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
  //       : labelsClasses[0]
  //   );
  //   const [selectColor, setSelectedColor] = useState(colours[0]);
  //   const [labels, setLabels] = useState([
  //     { service: ""},
  //   ]);

  const handleServiceChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...labels];
    list[i][name] = value;
    setLabels(list);
  };
  //   const handleColorChange = (color) => {
  //     const newColor = [...labels];
  //     newColor
  //     setLabels(newColor);
  //   };
  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      colorTitler: { labels, selectColor },
      //   label: selectColor,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    // to delete color labels
    const calendarTitle = {
      colorTitle: labels,
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
  }

  const handleServiceAdd = () => {
    setLabels([...labels, { service: "" }]);
  };
  const handleServiceRemove = (i) => {
    const list = [...labels];
    list.splice(i, 1);
    setLabels(list);
  };

  return (
    <Container>
      <div className="habits">
        <button onClick={() => handleServiceAdd()}>
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
            {labels.map((singleService, index) => (
              <div className="labels">
                <div className="colors">
                  <Dropdown />
                  {/* {colours.map((color, i) => (
                    <span
                      key={i}
                      onClick={() => {
                        setSelectedColor(color);
                      }}
                      data-value={color}
                      id="color"
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
                      {selectColor === color && <BsCheck />}
                    </span>
                  ))} */}
                </div>
                <input
                  type="text"
                  name="service"
                  placeholder="color title"
                  value={singleService.service}
                  required
                  onChange={(e) => handleServiceChange(e, index)}
                />
                <div className="remove">
                  {labels.length !== 1 && (
                    <button
                      type="button"
                      onClick={() => handleServiceRemove(index)}
                      className="remove-btn"
                    >
                      <span>
                        <BsTrash />
                      </span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <footer>
            <button type="submit" onClick={handleSubmit}>
              Save
            </button>
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
    ${"" /* display: flex; */}
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
