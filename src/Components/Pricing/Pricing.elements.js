import styled from "styled-components";

export const PricingSection = styled.section`
  padding: 100px 0px 160px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
  
`

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
`

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

`

export const PricingCard = styled.div`
  background: #242424;
  color: #fff;
  width: 280px;
  border-radius: 10px;


  &:nth-child(2) {
    margin: 240px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`
export const PricingInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 1.3rem;
  color: #fff;
  height: 500px;
  /* border-radius: 5px; */
`

export const PricingCardIcon = styled.div`
  margin: 1.2rem 0rem;
  font-size: 3rem;
`

export const PricingCardPlan = styled.h3`
  margin-bottom: 1.5rem;
  font-size: 2rem;
`
export const PricingPrice = styled.h2`
  margin-bottom: .3rem;
  font-size: 2rem;
`

export const PricingDuration = styled.p`
  font-size: .8rem;
  margin-bottom: .3rem;
`

export const PricingCardFeatures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
`

export const Feature = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`

export const ServiceHeading = styled.h1`
  margin-bottom: 2rem;
  font-size: 3rem;
  color: #fff;
`