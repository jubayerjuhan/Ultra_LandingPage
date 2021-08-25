import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FooterSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`

export const FooterSubHeading = styled.p`
  font-family: 'Trebuchet MS', 'Lucidia Sans';
  margin-bottom: 24px;
  font-size: 1.4rem;
`

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 1rem;
`

export const TakeEmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 80%;
  };
`

export const EmailField = styled.input`
  outline: none;
  border: 1px solid #fff;
  font-size: 1rem;
  padding: 9px 20px;
  border-radius: 5px;
  margin-right: 10px;
  
  @media screen and (max-width: 960px){
    margin: 0 0 16px 0px;
    width: 100%;
  }
`

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width:1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 960px) {
    padding-top:32px;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 960px){
    flex-direction: column;
    justify-content: center;
  }
`

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  text-align:left;
  width: 10rem;
  box-sizing: border-box;
  color: #fff;

@media screen and (max-width: 960px){
  padding: 0.5rem;
  margin: 0;
  width: 100%;
}
`

export const FooterLinkTitle = styled.h2`
  margin-bottom: 1rem;
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0467fb;
    transition: all 0.3 ease-out
  }
`

