import React from 'react'
import { StyledCallToActionContent, StyledCallToActionDomainContent, StyledCallToActionDomainPrice, StyledCallToActionDomainTerm, StyledCallToActionDomainsList, StyledCallToActionH2, StyledCallToActionInputContent } from './styledComponents'

const CallToAction: React.FC = () => {
  return (
    <StyledCallToActionContent>
      <StyledCallToActionInputContent>
        <StyledCallToActionH2>Search Your Domain Now</StyledCallToActionH2>
        <input placeholder='Search your domain'></input>
        <button>Find NOW</button>
      </StyledCallToActionInputContent>
      <StyledCallToActionDomainsList>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <StyledCallToActionDomainContent>
          <StyledCallToActionDomainTerm>.com</StyledCallToActionDomainTerm>
          <StyledCallToActionDomainPrice>$10 / month</StyledCallToActionDomainPrice>
        </StyledCallToActionDomainContent>

        <StyledCallToActionDomainContent>
          <StyledCallToActionDomainTerm>.co.uk</StyledCallToActionDomainTerm>
          <StyledCallToActionDomainPrice>$10 / month</StyledCallToActionDomainPrice>
        </StyledCallToActionDomainContent>

        <StyledCallToActionDomainContent>
          <StyledCallToActionDomainTerm>.shop</StyledCallToActionDomainTerm>
          <StyledCallToActionDomainPrice>$19 / month</StyledCallToActionDomainPrice>
        </StyledCallToActionDomainContent>
      </div>

       <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '25px'}}>
       <StyledCallToActionDomainContent>
          <StyledCallToActionDomainTerm>.in</StyledCallToActionDomainTerm>
          <StyledCallToActionDomainPrice>$14 / month</StyledCallToActionDomainPrice>
        </StyledCallToActionDomainContent>

        <StyledCallToActionDomainContent>
          <StyledCallToActionDomainTerm>.de</StyledCallToActionDomainTerm>
          <StyledCallToActionDomainPrice>$12 / month</StyledCallToActionDomainPrice>
        </StyledCallToActionDomainContent>

        <StyledCallToActionDomainContent>
          <StyledCallToActionDomainTerm>.nl</StyledCallToActionDomainTerm>
          <StyledCallToActionDomainPrice>$13 / month</StyledCallToActionDomainPrice>
        </StyledCallToActionDomainContent>
       </div>
      </StyledCallToActionDomainsList>
    </StyledCallToActionContent>
  )
}

export default CallToAction