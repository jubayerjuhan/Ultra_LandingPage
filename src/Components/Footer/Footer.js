import React from 'react'
import { EmailField, FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksWrapper, FooterLinkTitle, FooterSubHeading, FooterSubscription, FooterSubText, SocialIcon, SocialIconLinks as SocialIconLink, SocialLogo, SocialMedia, SocialMediaIcons, SocialMediaWrap, TakeEmailContainer, WebRights } from "./Footer.elements";
import { Button } from "./../../GlobalStyle";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const Subheading = `Join Our Exclusive Membership To
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
              <FooterLink to='/sign-up'>How It Works</FooterLink>
              <FooterLink to='/sign-up'>Testimonials</FooterLink>
              <FooterLink to='/sign-up'>Careers</FooterLink>
              <FooterLink to='/sign-up'>Investors</FooterLink>
              <FooterLink to='/sign-up'>Terms and Conditions</FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/sign-up'>How It Works</FooterLink>
              <FooterLink to='/sign-up'>Testimonials</FooterLink>
              <FooterLink to='/sign-up'>Careers</FooterLink>
              <FooterLink to='/sign-up'>Investors</FooterLink>
              <FooterLink to='/sign-up'>Terms and Conditions</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/sign-up'>How It Works</FooterLink>
              <FooterLink to='/sign-up'>Testimonials</FooterLink>
              <FooterLink to='/sign-up'>Careers</FooterLink>
              <FooterLink to='/sign-up'>Investors</FooterLink>
              <FooterLink to='/sign-up'>Terms and Conditions</FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/sign-up'>How It Works</FooterLink>
              <FooterLink to='/sign-up'>Testimonials</FooterLink>
              <FooterLink to='/sign-up'>Careers</FooterLink>
              <FooterLink to='/sign-up'>Investors</FooterLink>
              <FooterLink to='/sign-up'>Terms and Conditions</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/'>
                <SocialIcon />
                ULTRA
              </SocialLogo>
              <WebRights>ULTRA &copy; 2021 </WebRights>

              <SocialMediaIcons>
                <SocialIconLink href="https://facebook.com/zuck" target="_blank">
                  <FaFacebook/>
                </SocialIconLink>
                <SocialIconLink href="https://facebook.com/zuck" target="_blank">
                  <FaTwitter/>
                </SocialIconLink>
                <SocialIconLink href="https://facebook.com/zuck" target="_blank">
                  <FaGithub/>
                </SocialIconLink>
                <SocialIconLink href="https://facebook.com/zuck" target="_blank">
                  <FaLinkedinIn/>
                </SocialIconLink>
              </SocialMediaIcons>
            </SocialMediaWrap>
          </SocialMedia>
      </FooterContainer>
    </>
  )
}

export default Footer
