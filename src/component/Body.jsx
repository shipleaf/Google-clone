import React from 'react';
import styled from 'styled-components';
import logo from '../asset/logo.png'
import { AiOutlineSearch } from "react-icons/ai";
import mic from '../asset/mic.png';
import camera from '../asset/camera.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Logo = styled.div`
  margin-top: 95px;
  margin-bottom: 38px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 560px;
  height: 44px;
  border: none;
  box-shadow: 1px 1px 3px #dddddd, -1px -1px 3px #dddddd;
  border-radius: 3rem;

  & > input{
    border: none;
    width: 75%;
    height: 80%;
    margin-right: 20px;

    &::placeholder{
      font-size: 15px;
    }
    &:focus{
      outline: none;
      
    }
  }
`

function Body() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="" style={{ width: '275px' }} />
      </Logo>
      <SearchBar>
        <AiOutlineSearch size='18' style={{
          color: '#5F6368', marginLeft: '20px'
        }} />
        <input
          type='text'
          placeholder='Google 검색 또는 URL 입력'
        />
        <img src={mic} alt="" style={{ width: '15px' }} />
        <img src={camera} alt="" style={{ width: '23px', marginLeft: '30px;' }} />
      </SearchBar>
    </Container>
  )
}

export default Body
