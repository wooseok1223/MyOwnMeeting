import React, {useState} from 'react'
import styled from "styled-components"
import logo from '../img/logo.png'

function Header() {
    // const [src] = useState("../img/logo.png")
    return (
        <Container className="header">
            <Logo src={logo}/>
            <span> 움직이는 사람들 </span>
        </Container>
    );
}

const Container = styled.div`
width : 100%;
hight : 100px;
`

const Logo = styled.img`
width : 30px;
hight : 30px;
src : ${props => props.src};
`


export default Header;