import React from "react";
import Logo from "../../assets/star-wars.svg"
import { HeaderContainer, HeaderWrapper, LogoImage } from "../../styles/header";

const Header=()=>{
    return(
        <HeaderContainer>
            <HeaderWrapper>
                <LogoImage src={Logo} alt="Error"/>
                <p>Home</p>
                <p>About</p>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header