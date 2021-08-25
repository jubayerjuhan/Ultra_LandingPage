import React from 'react'
import { EmailField, FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksWrapper, FooterLinkTitle, FooterSubHeading, FooterSubscription, FooterSubText, TakeEmailContainer } from "./Footer.elements";
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

        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to ='/sign-up'>How It Works</FooterLink>
              <FooterLink to ='/sign-up'>Testimonials</FooterLink>
              <FooterLink to ='/sign-up'>Careers</FooterLink>
              <FooterLink to ='/sign-up'>Investors</FooterLink>
              <FooterLink to ='/sign-up'>Terms and Conditions</FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to ='/sign-up'>How It Works</FooterLink>
              <FooterLink to ='/sign-up'>Testimonials</FooterLink>
              <FooterLink to ='/sign-up'>Careers</FooterLink>
              <FooterLink to ='/sign-up'>Investors</FooterLink>
              <FooterLink to ='/sign-up'>Terms and Conditions</FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to ='/sign-up'>How It Works</FooterLink>
              <FooterLink to ='/sign-up'>Testimonials</FooterLink>
              <FooterLink to ='/sign-up'>Careers</FooterLink>
              <FooterLink to ='/sign-up'>Investors</FooterLink>
              <FooterLink to ='/sign-up'>Terms and Conditions</FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to ='/sign-up'>How It Works</FooterLink>
              <FooterLink to ='/sign-up'>Testimonials</FooterLink>
              <FooterLink to ='/sign-up'>Careers</FooterLink>
              <FooterLink to ='/sign-up'>Investors</FooterLink>
              <FooterLink to ='/sign-up'>Terms and Conditions</FooterLink>
            </FooterLinksItems>

          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterContainer>
    </>
  )
}

export default Footer
