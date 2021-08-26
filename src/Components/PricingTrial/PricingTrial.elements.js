import styled from "styled-components";

export const ProductComponent = styled.section`
  padding: 100px 0 150px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4B59F7;
  width: 100%;
`
export const ProductWrapper = styled.div`
  margin: 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ProductContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content:center;
  align-items: center;

  @media only screen and (max-width: 960px){
    flex-direction: column;
    align-items: center;
  }
`

export const ProductCard = styled.div`
  width: 280px;
  height: 500px;
  border-radius: 4px;
  background: #242424;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  &:nth-child(2) {
    margin: 0 5rem;
  }

  @media only screen and (max-width: 960px){
  width: 90%;
  margin-bottom: 3rem;
  
  &:nth-child(2) {
    margin: 0 0 3rem 0;
  }
  }
`

export const PricingTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px){
    width: 90%;
  }
`

export const ProductCardLogo = styled.div`
  font-size: 3rem;
  margin-top: 3rem;
`

export const ProductTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

export const ProductPrice = styled.h2`
  font-size: 2rem;
  margin-bottom: .4rem;
`

export const ProductLength = styled.small`
  font-size: 1rem;
`
export const ProductFeatures = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 1rem;
`
export const Feature = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`

