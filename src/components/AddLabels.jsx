import React, { useState } from 'react'
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import Labels from './Labels';



const AddLabels = () => {

    const [active, setActive] = useState(false);

    const showMenu = () => {
      setActive(!active);
    };
  
    
  return (
    <Container>
        <div className='add-labels'>
        <button className='add-button'>
              <AiOutlinePlus style={{color: "white"}} onClick={showMenu}/>
            </button>
            {active &&
        <div className='habits'>
              <Labels />
              {/* <h1>hello</h1> */}
            </div>
            }
            
        </div>

    </Container>
  )
}

export default AddLabels

const Container = styled.div`
.add-labels{
  color: var(--color-secondary);
  visibility: hidden;

}
.habits{
  position: fixed;
  padding: 2rem;
  background-color: var(--color-white);
  width: 15rem;
  height: 25rem;
  right: 4rem;
  bottom: 4rem;
  z-index: 1;
  border-radius: 15px;
  box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.2);

}
  .add-button { 
            position: fixed; 
            padding-top: .3rem;
            border-radius: 50px;
            border: .15rem solid var(--color-bg);
            width: 2.5rem;
            height: 2.5rem;
            right: 1.5rem;
            bottom: 1.5rem;
            z-index: 1;
            cursor: pointer;
            background-color: var(--color-primary);
            font-size: 1.4rem;
        }

@media screen and (max-width: 800px){
    .add-labels{
      visibility: visible;
    }
  }
`;