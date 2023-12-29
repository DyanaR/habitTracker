import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link, useNavigate} from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const {user} = UserAuth;
  return (
    <Container>
      <Navbar />
      <div className="home">
        <div className="motto">
          <h1>Daily Habits, Yearly Impact:</h1>
          <h1>See Your Progress In Color</h1>
        </div>
        <div className="tagline">
          <h4>
            Experience the power of visual accountability and turn daily actions
            into lasting habits effortlessly.
          </h4>
        </div>
        <Link to={!user ? "/HueTrack" : "/Signup" }>
          <button>
            <h3>Start HueTrack</h3>
          </button>
        </Link>
      </div>
    </Container>
  );
};
const Container = styled.div`
  .home {
    text-align: center;
  }
  .motto {
    padding: 4rem 1rem;
    font-size: 3rem;
  }
  .tagline {
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }
  button {
    background-color: var(--color-white);
    width: max-content;
    display: inline-block;
    color: var(--color-text);
    padding: 0.4rem 0.6rem;
    border-radius: 0.2rem;
    cursor: pointer;
    border: 1px solid var(--color-text);
    transition: var(--transition);
    font-size: 1.5rem;
  }
`;

export default Home;
