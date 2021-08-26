import React from 'react'
import { Feature, PricingCard, PricingCardFeatures, PricingCardIcon, PricingCardPlan, PricingContainer, PricingDuration, PricingInfo, PricingPrice, PricingSection, PricingWrapper, ServiceHeading } from './Pricing.elements.js'
import {GiRock}  from 'react-icons/gi'
import { Button } from "./../../GlobalStyle";

const Pricing = () => {
  return (
    <>
      <PricingSection>
        <PricingWrapper>
          <ServiceHeading>Our Services</ServiceHeading>
          <PricingContainer>
            
            <PricingCard>
              <PricingInfo>
                <PricingCardIcon>
                  <GiRock/>
                </PricingCardIcon>
                <PricingCardPlan>Starter</PricingCardPlan>
                <PricingPrice>$699</PricingPrice>
                <PricingDuration>One Month</PricingDuration>
                <PricingCardFeatures>
                  <Feature>To Be added</Feature>
                  <Feature>To Be added</Feature>
                  <Feature>To Be added</Feature>
                </PricingCardFeatures>
                <Button>Get Started</Button>
              </PricingInfo>
            </PricingCard>


            <PricingCard>
              <PricingInfo>
                <PricingCardIcon>
                  <GiRock/>
                </PricingCardIcon>
                <PricingCardPlan>Starter</PricingCardPlan>
                <PricingPrice>$699</PricingPrice>
                <PricingDuration>One Month</PricingDuration>
                <PricingCardFeatures>
                  <Feature>To Be added</Feature>
                  <Feature>To Be added</Feature>
                  <Feature>To Be added</Feature>
                </PricingCardFeatures>
                <Button>Get Started</Button>
              </PricingInfo>
            </PricingCard>

            <PricingCard>
              <PricingInfo>
                <PricingCardIcon>
                  <GiRock/>
                </PricingCardIcon>
                <PricingCardPlan>Starter</PricingCardPlan>
                <PricingPrice>$699</PricingPrice>
                <PricingDuration>One Month</PricingDuration>
                <PricingCardFeatures>
                  <Feature>To Be added</Feature>
                  <Feature>To Be added</Feature>
                  <Feature>To Be added</Feature>
                </PricingCardFeatures>
                <Button>Get Started</Button>
              </PricingInfo>
            </PricingCard>
            
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </>
  )
}

export default Pricing
