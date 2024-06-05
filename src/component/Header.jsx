import React from 'react'
import styled from 'styled-components'
import { PiFlaskFill } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";

const PageHeader = styled.div`
    position: relative;
`
const NavBar = styled.div`
    & > button{
        border: none;
        background-color: #fff;
        cursor: pointer;
        margin-left: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }    
    position: absolute;
    right: 0%;
    padding: 12px;
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const User = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #5D4037;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`


function Header() {
    return (
        <PageHeader>
            <NavBar>
                <button>Gmail</button>
                <button>이미지</button>
                <button><PiFlaskFill size='25' style={{color: '#5F6368'}}/></button>
                <button><CgMenuGridO size='25'style={{color: '#5F6368'}}/></button>
                <button>
                    <User>
                        <span>선엽</span>
                    </User>
                </button>
            </NavBar>
        </PageHeader>
    )
}



export default Header
