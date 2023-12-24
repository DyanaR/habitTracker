import React, { Fragment } from "react";
import styled from "styled-components";
import Day from "./Day";
import Stats from "./Stats";

export default function Month({ month }) {
  return (
    <Container>
      <div className="month">
        {month.map((row, i) => (
          <Fragment key={i}>
            {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i} />
            ))}
          </Fragment>
        ))}
      </div>
      <div className="stats-conatiner">
            <Stats />
      </div>
    </Container>
  );
}

const Container = styled.div`
  .month {
    padding: 3rem;
    display: grid;
    grid-template-columns: repeat(7, 0fr);
    justify-content: center;
  }
  .stats{
    visibility: hidden;
  }
  @media screen and (max-width: 950px){
    .day-container{
      width: 4rem;
      height: 4rem;
  }
  }
  @media screen and (max-width: 800px){
    .stats-conatiner{
      display: flex;
      justify-content: center;
      background-color: var(--color-bg);
    }

    .stats{
      visibility: visible;
      text-align: center;
  }

  

  }
  @media screen and (max-width: 580px){
    .day-container{
      width: 3rem;
      height: 3rem;
    }
  }
`;
