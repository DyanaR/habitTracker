import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const {createUser} = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try{
            await createUser(email, password)
            navigate('/');
        }catch (e){
            setError(e.message)
            console.log(e.message)
        }
    }

  return (
    <Container>
    <Navbar />
    <div className="signup-container">
      <div className="words">
        <h1>Create a New Account</h1>
        <p style={{ paddingTop: "1rem" }}>
          Already have an account? <Link to="/Login">Log in.</Link>
        </p>
      </div>
      <form onSubmit={handleSubmit} style={{padding: '0 4rem'}}>
        <div className="email">
            <label>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email"/>
        </div>
        <div className="password">
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password"/>
        </div>
        <button>Sign Up</button>
      </form>
    </div>
    </Container>
  );
};
const Container = styled.div`
.signup-container{
    margin: 2rem;
    padding: 2rem 4rem;
}
  .words {
    text-align: center;
    padding: 4rem 1rem;
  }
  label{
    font-weight: bold;
  }
  input {
    margin: 0.5rem 0;
    padding-left: 1rem;
    border: none;
    height: 2rem;
    border-radius: 5px;
    background-color: var(--color-bg);
  }
  .email{
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
  }
  .password{
    display:flex;
    flex-direction: column;
    padding-bottom: 1rem;
  }
  button {
    background-color: var(--color-primary);
    width: 100%;
    display: inline-block;
    color: var(--color-bg);
    padding: 0.8rem 0;
    border-radius: 0.2rem;
    cursor: pointer;
    border: none;
    transition: var(--transition);
  }
  button:hover{
    background-color: #54a4ab;
  }
`;
export default Signup;
