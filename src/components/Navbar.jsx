import React from 'react'
import styled from 'styled-components'


const Navbar = () => {
  return (
    <Container>
    <div className='navbar'>
        <div>
            <h1>Habit Tracker</h1>
        </div>
        <div className='navbar-right'>
            <h3>Log in</h3>
            <h3>Sign Up</h3>
        </div>

    </div>
    </Container>
  )
}

export default Navbar

const Container = styled.div`

.navbar{
    background-color: var(--color-white);
    display: flex;
    justify-content: space-between;
    padding: 2rem 10rem;
    box-shadow: 0 2px 3px var(--color-shadow);
}
.navbar-right{
    display: flex;
    gap: 2rem;
    align-items: center;
}

    
`;