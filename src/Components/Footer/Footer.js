import React from 'react'
import { EmailField, FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText, TakeEmailContainer } from "./Footer.elements";
import { Button } from "./../../GlobalStyle";

const Footer = () => {
  const Subheading  = `Join Our Exclusive Membership To
    Recive the latest news and trends`

  const SubText = `You Can Unsubscribe To Our Newsletter Any Time`
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>{Subheading}</FooterSubHeading>
          <FooterSubText>{SubText}</FooterSubText>
          
          <TakeEmailContainer>
            <EmailField type="email" placeholder="Enter Email" name="email"></EmailField>
            <Button primary>Subscribe</Button>
          </TakeEmailContainer>
        </FooterSubscription>
      </FooterContainer>
    </>
  )
}

export default Footer
