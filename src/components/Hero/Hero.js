import styled from 'styled-components'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

export const heroContainer = styled.section`
  padding-top: 55px;
  width: 100%;
  min-height: 100vh;

  display: grid;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  
  @media(min-width: 768px){
    grid-template-columns: 1fr 1fr;
  }
`

export const heroContentTop = styled.div`
  margin-top: 20px;
  padding-inline: 15px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 575px) {
    justify-content: center;
    text-align: center;
}
  @media (min-width: 768px){
    flex-direction: row-reverse;
  }
`

export const redeSocial = styled.div`
  font-size: 12vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media (min-width: 575px){
    font-size: 50px;
  }
  @media (min-width: 768px){
    font-size: 45px;
  }
  @media (min-width: 992px){
    font-size: 50px;
  }
`
export const IconGithub = styled(BsGithub)`
  cursor: pointer;
  transition: all 0.4s ease;
  border-radius: 50%;

  &:hover {
    color: rgba(0, 0, 0);
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.5);
  }
`
export const IconLinkedin = styled(BsLinkedin)`
  cursor: pointer;
  transition: all 0.4s ease;
  border-radius: 40px;

  &:hover {
    color: #0077b5;
    box-shadow: 0px 0px 10px 10px rgba(0, 119, 181, 0.7);
  }
`
export const avatarContainer = styled.div`
  width: 100%;
  height:100%;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 364px) {
    width: 259px;
    height: 239px;
  }
  @media (min-width: 768px) {
    min-width: 350px;
    min-height: 400px;
  }
  @media (min-width: 992px) {
    width: 480px;
    height: 500px;
  }
  @media (min-width: 1200px){
    width: 490px;
  }
`
export const heroContentBottom = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  //background-color: pink;
  h2 {
    width: 100%;
    color: var(--cor-branca);
    font-size: 33px;
    display: flex;
    gap: 8px;
    
  }
  span{
    color: var(--cor-bg-dark-navbar);
  }
  p{
    padding-bottom: 20px;
  }

  @media (min-width: 575px) {
    p{
      text-align: left;
    }
    h2{
      font-size: 53px;
    }
}

@media (min-width: 768px) {
  grid-area: 1;
  h2{
      font-size: 58px;
    }
}
`
