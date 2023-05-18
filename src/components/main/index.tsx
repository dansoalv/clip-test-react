import React from 'react'
import main from '../../assets/main.png'
import { StyledMainButton, StyledMainContent, StyledMainH1, StyledMainImg, StyledMainP, StyledMainText } from './styledComponents'

const Main: React.FC = () => {
  return (
    <StyledMainContent>
      <StyledMainText>
        <StyledMainH1>Fully Managed Cloud & Web Hosting</StyledMainH1>
        <StyledMainP>Deidcated resources, full root access, & easy scaling. It's the virtual private server you've been cravin</StyledMainP>
        <StyledMainButton>View Pricing</StyledMainButton>
      </StyledMainText>
      <StyledMainImg>
        <img src={main} alt="main" />
      </StyledMainImg>
    </StyledMainContent>
  )
}

export default Main