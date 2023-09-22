import React from "react";
import styled from "styled-components";
import Stats from "./Stats";
import Labels from "./Labels";

const Sidebar = () => {
  return (
    <Container>
      <aside className="sidebar">
        <Labels />
        <Stats />
      </aside>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  .sidebar {
    padding: 0 2rem;
    padding-top: 2.5rem;
    background-color: var(--color-white);
    border-right: 1.3px solid var(--color-bg);
    position: absolute;
    float: left;
    top: 0px;
    bottom: 0px;
    height: 100%;
  }
  .title {
    margin-bottom: 1rem;
  }
  ${'' /* input[type="text"] {
    padding-left: 1rem;
    border: none;
    height: 2rem;
    border-radius: 5px;
    background-color: var(--color-bg);
  } */}
`;
