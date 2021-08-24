import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg })=> lightBg ? '#fff': '#101522'};
`

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({imgStart})=> imgStart ? 'row-reverse' : 'row'};
`
export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 50%;
  flex: 1;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  
  @media screen and (max-width: 768px){
    padding-bottom: 65px;
  }
`

export const TopLine = styled.h3`
  color: ${({lightTopLine})=> lightTopLine ? '#a9b3c1' : '#4b59f7'};
  font-size: 1rem;
  line-height: 1.2rem;
  /* font-weight: 700; */
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  color: ${({lightHeading})=> lightHeading ? '#f7f8fa' : '#1c2237'};
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size:1rem;
  line-height: 24px;
  color: ${({lightSubtitle})=> lightSubtitle ? '#a9b3c1' : '#1c2237'};
`