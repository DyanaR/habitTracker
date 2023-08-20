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
