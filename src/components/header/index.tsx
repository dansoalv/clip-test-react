import React from 'react'
import logo from '../../assets/logo.png'
import { StyledHeaderButton, StyledHeaderContent, StyledHeaderLi, StyledHeaderLogo, StyledHeaderMenu, StyledHeaderUl } from './styledComponents'

const Header: React.FC = () => {
  return (
    <StyledHeaderContent>
      <StyledHeaderLogo>
        <img src={logo}  alt="Logo"/>
      </StyledHeaderLogo>
      <StyledHeaderMenu>
        <StyledHeaderUl>
          <StyledHeaderLi>Home</StyledHeaderLi>
          <StyledHeaderLi>About us</StyledHeaderLi>
          <StyledHeaderLi>Service</StyledHeaderLi>
          <StyledHeaderLi>Contact Us</StyledHeaderLi>
          <StyledHeaderLi><StyledHeaderButton>Login</StyledHeaderButton></StyledHeaderLi>
        </StyledHeaderUl>
      </StyledHeaderMenu>
    </StyledHeaderContent>
  )
}

export default Header