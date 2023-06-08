import React from 'react'
import styled from "styled-components";
import Dropdown from './Dropdown';


const Sidebar = () => {
  return (
    <Container>
    <aside className='sidebar'>
        <input className='title' type="text" placeholder='habit title' />
        
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />

        <div className='stats__container'>
            <h1>13</h1>
            <h6>Happy</h6>

        </div>
    </aside>

    </Container>
  )
}

export default Sidebar

const Container = styled.div`
    .sidebar{
        margin: 1rem;
        width: 20rem;
        padding: 2rem;
        background-color:var(--color-white)
    }
    .title{
        margin-bottom: 1rem;
    }
    input[type=text]{
        padding-left: 1rem;
        border: none;
        height: 2rem;
        border-radius: 5px;
        background-color: var(--color-bg);
    }
    .stats__container{
    padding-top: 3rem;
    padding-bottom: 30rem;
  }
   

`;
