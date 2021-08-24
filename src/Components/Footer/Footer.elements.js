import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  /* flex-direction: column; */
  flex-direction: center;
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
  }
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