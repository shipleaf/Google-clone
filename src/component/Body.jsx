import React from 'react';
import styled from 'styled-components';
import logo from '../asset/logo.png'

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


function Body() {
  return (
    <div>
      <Logo>
        <img src = {logo} alt="" style={{width: '280px'}}/>
      </Logo>
    </div>
  )
}

export default Body
