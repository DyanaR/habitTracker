import React, { Fragment } from "react";
import styled from "styled-components";
import Day from "./Day";

export default function Month({ month }) {
  return (
    <Container>
      <div className="month flex-1 grid grid-cols-7 grid-rows-5">
        {month.map((row, i) => (
          <Fragment key={i}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i} />
            ))}
          </Fragment>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .month {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(7, 0fr);
    justify-content: center;
  }
`;
