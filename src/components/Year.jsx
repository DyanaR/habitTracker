import React, { Fragment } from "react";
import styled from "styled-components";
import Day from "./Day";

export default function Year({ monthCount }) {
  return (
    <Container>
      <div className="year">
        {monthCount.map(({ monthNames, month }, index) => {
          return (
            <div key={index}>
              <div className="month-title">{monthNames.format("MMMM")}</div>
              <div className="month">
                {month.map((row, i) => (
                  <Fragment key={i}>
                    {row.map((day, idx) => (
                      <Day day={day} key={idx} />
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .year {
    display: grid;
    grid-template-columns: repeat(4, 0fr);
    justify-content: center;
    text-align: center;
  }
  .month-title {
  }
  .month {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(7, 0fr);
    justify-content: center;
  }
  .day-container {
    width: 2rem;
    height: 2rem;
  }
`;
