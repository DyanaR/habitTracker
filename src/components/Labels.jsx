import React, { useContext, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../context/GlobalContext";
import Dropdown from "./fullSidebar/Dropdown";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash, BsCheck } from "react-icons/bs";
import { colours } from "../utils/calendar";

const Labels = () => {
  
  const {
    labels,
    setLabels,
    selectColor,
    daySelected,
    dispatchCalEvents,
    setSelectedColor,
  } = useContext(GlobalContext);

    //const [serviceList, setlabels] = useState([{ service: "" }]);
  const [title, setTitle] = useState("");

  const handleServiceChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...labels];
    list[i][name] = value;
    setLabels(list);
    console.log(e.target.name);
  };

 
  const handleServiceRemove = (i) => {
    const list = [...labels];
    list.splice(i, 1);

    setLabels(list);
  };

  const handleServiceAdd = () => {
    setLabels([...labels, { service: "" }]);
  };
  
  //   let handleSubmit = (event) => {
  //     event.preventDefault();
  //     alert(JSON.stringify(labels));
  // }

  function handleSubmit(e) {
    e.preventDefault();
    const calendarHabit = {
        title,
        colorLabels: labels.singleService.service,
        color: selectColor,
        day: daySelected.valueOf(),
        id: Date.now(),
    };
    dispatchCalEvents({ type: "push", payload: calendarHabit });
  }

  return (
    <Container>
      <form className="h" autoComplete="off">
        {daySelected.format("dddd, MMMM DD")}
        <input
          className="title"
          type="text"
          placeholder="Habit Title"
          name="title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="labels">
          <button onClick={() => handleServiceAdd()}>
            <AiOutlinePlus />
            Add Color
          </button>
          {labels.map((singleService, index) => (
            <div key={index} className="label">
                {/* <Dropdown
                  name="drowdown"
                  value={selectColor}
                  //   onChange={(e) => handleServiceChange(e, index)}
                /> */}
                <div className="colors">
                  {colours.map((color, i) => (
                    <span
                      key={i}
                      onClick={() => {
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
                      {selectColor === color && <BsCheck />}
                    </span>
                  ))}
                </div>
                <input
                  name="service"
                  type="text"
                  value={singleService.service}
                  placeholder="Color Title"
                  onChange={(e) => handleServiceChange(e, index)}
                  required
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
        <button type="submit" onChange={handleSubmit}>
          Save
        </button>
        </footer>
        {console.log(labels)}
      </form>
    </Container>
  );
};

export default Labels;

const Container = styled.div`
  .label {
    ${'' /* display: flex; */}
    gap: 0.5rem;
  }
  .input {
    display: flex;
    gap: 0.5rem;
  }
  .title {
    margin-bottom: 1rem;
  }
  .colors {
    display: flex;
    gap: 0.5rem;
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
