import React, { useContext, useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import Stats from "../Stats";
import GlobalContext from "../../context/GlobalContext";
import Labels from "../Labels";
import Events from "../Events";

const Sidebar = () => {
  // const [colorLabel, setColorLabel] = useState(1);
  const { colorLabel } = useContext(GlobalContext);
  // const [title, setTitle] = useState("");

  return (
    <Container>
      <aside className="sidebar">
        <Events />
        <Stats />
      </aside>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  .sidebar {
    padding: 1rem 2rem;
    background-color: var(--color-white);
    border-right: 1.3px solid var(--color-shadow);
  }
  .title {
    margin-bottom: 1rem;
  }
  input[type="text"] {
    ${"" /* width: 100%; */}
    padding-left: 1rem;
    border: none;
    height: 2rem;
    border-radius: 5px;
    background-color: var(--color-bg);
  }
  .stats__container {
    padding-top: 3rem;
    padding-bottom: 30rem;
  }
`;
