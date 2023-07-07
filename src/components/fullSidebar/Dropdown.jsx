import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import { ReactComponent as Square } from '../../assets/square.svg'

const Dropdown = () => {

    const colors = ["red", "blue", "orange", "yellow", "pink", "green"]

    const [expand, setExpand] = useState(false);

    const [value, setValue] = useState("grey");

    const changeValue = (colors) => {setValue(colors)};



    let menuRef = useRef();

    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setExpand(false);
        //   console.log(menuRef.current);
        }      
      };
  
      document.addEventListener("mousedown", handler);
      
  
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
  
    });


            
  return (
    <Container>
         <div className='menu'>
            <div className='dropdown' ref={menuRef} >
                <button type='button' onClick={()=>{setExpand(!expand)}}> <Square style={{fill: value}}/> </button>
                
                    <div onClick={()=>{setExpand(!expand)}} className={'dropdown-menu ' + (expand ? 'active' : 'inactive')}>
                        {colors.map((color) => {
                            return <a href='#'onClick={() => (changeValue(color))}> <Square style={{fill: color}}/></a>
                        })}
                    </div>
            </div>
            
            <div className='label'>
                <input type="text" placeholder='habit title' />
            </div>
        </div>

    
       
    </Container>
  )
}

export default Dropdown

const Container = styled.div`
    .menu{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .dropdown{
        padding: .5rem 0;
        position: relative;
    }
    button{
        border: none;
        cursor: pointer;
        appearance: none;
    }
    .dropdown-menu{
        position: absolute;
        display: flex;
        gap: 1rem;
        padding: .5rem;
        background-color: var(--color-white);
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
    .dropdown-menu.active{
         visibility: visible;
    }
    .dropdown-menu.inactive{
        visibility: hidden;
    }
    button, a {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

