import React from 'react'
import { GiDiamonds } from 'react-icons/gi';
import { Feature, PricingTitle, ProductCard, ProductCardLogo, ProductComponent, ProductContainer, ProductFeatures, ProductInfo, ProductLength, ProductPrice, ProductTitle, ProductWrapper } from "./PricingTrial.elements";
import { Button } from "./../../GlobalStyle";

const PricingTrial = () => {
  return (
    <>
      <ProductComponent>
        <ProductWrapper>
          <PricingTitle>Our Services</PricingTitle>
          <ProductContainer>
            <ProductCard>
              <ProductInfo>
                <ProductCardLogo>
                  <GiDiamonds/>
                </ProductCardLogo>
                <ProductTitle>Starter</ProductTitle>
                <ProductPrice>$699</ProductPrice>
                <ProductLength>lifetime</ProductLength>

                <ProductFeatures>
                  <Feature>To Be Added</Feature>
                  <Feature>To Be Added</Feature>
                  <Feature>To Be Added</Feature>
                </ProductFeatures>
                <Button>Hello</Button>
              </ProductInfo>
            </ProductCard>
            <ProductCard>
              <ProductInfo>
                <ProductCardLogo>
                  <GiDiamonds/>
                </ProductCardLogo>
                <ProductTitle>Starter</ProductTitle>
                <ProductPrice>$699</ProductPrice>
                <ProductLength>lifetime</ProductLength>

                <ProductFeatures>
                  <Feature>To Be Added</Feature>
                  <Feature>To Be Added</Feature>
                  <Feature>To Be Added</Feature>
                </ProductFeatures>
                <Button>Hello</Button>
              </ProductInfo>
            </ProductCard>
            <ProductCard>
              <ProductInfo>
                <ProductCardLogo>
                  <GiDiamonds/>
                </ProductCardLogo>
                <ProductTitle>Starter</ProductTitle>
                <ProductPrice>$699</ProductPrice>
                <ProductLength>lifetime</ProductLength>

                <ProductFeatures>
                  <Feature>To Be Added</Feature>
                  <Feature>To Be Added</Feature>
                  <Feature>To Be Added</Feature>
                </ProductFeatures>
                <Button>Hello</Button>
              </ProductInfo>
            </ProductCard>
          </ProductContainer>
        </ProductWrapper>
      </ProductComponent>
    </>
  )
}

export default PricingTrial
