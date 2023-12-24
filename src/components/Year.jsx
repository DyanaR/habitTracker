import React, { Fragment } from "react";
import styled from "styled-components";
import Day from "./Day";
import Stats from "./Stats";

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
                      <Day day={day} key={idx} rowIdx={i} />
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="stats-conatiner">
        <Stats />
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
    padding: 1rem 0;
  }
  .stats{
    visibility: hidden;
  }
  .month-title {
    padding-top: 1rem;
  }
  .month {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(7, 0fr);
    justify-content: center;
  }
  .weekday {
    margin-top: 0;
  }
  .day-container {
    width: 2rem;
    height: 2rem;
  }
  .weekday {
    height: 0.5rem;
  }

  @media screen and (max-width: 1400px) {
    .year {
      grid-template-columns: repeat(3, 0fr);
    }
    .date {
      font-size: 12px;
      ${"" /* font-weight: bold; */}
    }
    .weekday {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 1110px){
    .day-container{
      width: 1.5rem;
      height: 1.5rem;
    }
    .weekday {
      font-size: 10px;
    }
    .date {
      font-size: 10px;
      padding: 0;
    }
  }
  @media screen and (max-width: 970px){
    .day-container{
      width: 1.2rem;
      height: 1.2rem;
    }
    .weekday {
      font-size: 7px;
    }
    .date {
      font-size: 7px;
      padding: 0;
    }
    .today {
      width: .5rem;
      height: .5rem;
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
  @media screen and (max-width: 550px) {
    
    .day-container {
      width: .8rem;
      height: .8rem;
    }
    .weekday {
      display: none;
    }
    .date {
    }
    .month-title {
      font-size: 10px;
  }
  .month {
    padding-top: .2rem;
    
  }
  
  }

  @media screen and (max-width: 410px){
    .day-container {
      width: .7rem;
      height: .7rem;
    }
  }
`;
