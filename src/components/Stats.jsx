import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../context/GlobalContext";

const Stats = () => {
  const { colorObject, statObject } = useContext(GlobalContext);

  function countByColorCode(colorCode) {
    const statArray = Object.values(statObject) || [];
    const filterArray = statArray.filter(
      (iterator) =>
        iterator.colorCode === colorCode 
        //white color not counted
        && iterator.colorCode !== ""
    );
    return filterArray?.length || 0;
  }

  return (
    <Container>
      <div className="stats">
        <h2>Statistics</h2>
        <div className="info">
          {colorObject?.map((iterator, index) => (
            <div className="stats-info" key={index}>
              <h1>{countByColorCode(iterator?.colorCode)}</h1>
              {<h6>{iterator?.colorName || ""}</h6>}
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
