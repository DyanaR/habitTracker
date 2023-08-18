import React, { useContext, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../context/GlobalContext";

const Stats = () => {
  const {labels, counter} = useContext(GlobalContext);

  return (
    <Container>
      <div className="stats">
        <h2>Statistics</h2>
        <div className="info">
          {labels &&
            labels.map((singleService, index) => (
              <div className="stats-info" key={index}>
              <h1>{counter}</h1>
                {singleService.service && <h6>{singleService.service}</h6>}
                {singleService.dropdown}
              </div>
            ))}
        </div>
      </div>
    </Container>
  );
};

export default Stats;

const Container = styled.div`
  .info {
    display: grid;
    grid-template-columns: repeat(4, 0fr);
    gap: 1.5rem;
  }
  h2 {
    padding-top: 5rem;
    padding-bottom: 1rem;
  }
`;
