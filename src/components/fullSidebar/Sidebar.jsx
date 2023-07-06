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
        ${'' /* margin: 1rem; */}
        ${'' /* width: 12rem; */}
        padding: 1rem 2rem;
        ${'' /* height: 100%; */}
        background-color:var(--color-white);
        border-right: 1.3px solid var(--color-shadow);
    }
    .title{
        margin-bottom: 1rem;
    }
    input[type=text]{
      ${'' /* width: 100%; */}
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
