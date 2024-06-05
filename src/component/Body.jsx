import React from 'react';
import styled from 'styled-components';
import logo from '../asset/logo.png'
import { AiOutlineSearch } from "react-icons/ai";
import mic from '../asset/mic.png';
import camera from '../asset/camera.png';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 56px;
    position: absolute;
    top: 30%;
`
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  border: none;
  box-shadow: 1px 1px 1px #dddddd, -1px -1px 1px #dddddd;
  border-radius: 1rem;

  & > input{
    border: none;
    width: 80%;
  }
`

function Body() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="" style={{ width: '280px' }} />
      </Logo>
      <SearchBar>
        <AiOutlineSearch size='18' style={{color:'#5F6368', margin: ''
        }}/>
        <input
          type='text'
          placeholder='Google 검색 또는 URL 입력'
        />
        <img src={mic} alt="" style={{width:'15px'}}/>
        <img src={camera} alt="" style={{width:'23px', marginLeft: '30px;'}}/>
      </SearchBar>
    </Container>
  )
}

export default Body
