import React from 'react'
import { Container } from '../../GlobalStyle.js';
import { Heading, ImageWrapper, Img, InfoColumn, InfoRow, InfoSec, Subtitle, TextWrapper, TopLine } from "./InfoSection.elements";
import { Button } from "./../../GlobalStyle";
import { Link } from "react-router-dom";

const InfoSection = ({imageS,alt,start,lightBg,imgStart,lightTopLine,lightSubtitle,lightHeading,heading,topline,subtitle,buttonLabel}) => {
  return (
    <>
      <InfoSec lightBg = {lightBg}>
        <Container>
          <InfoRow imgStart = {imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topline}</TopLine>
                <Heading lightHeading = {lightHeading}>{heading}</Heading>
                <Subtitle lightSubtitle = {lightSubtitle}>{subtitle}</Subtitle>
                
                <Link to = "/sign-up">
                  <Button big fontBig primary>{buttonLabel}</Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            
            <InfoColumn>
              <ImageWrapper start = {start}>
                <Img src={imageS} alt={alt} />
              </ImageWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default InfoSection
