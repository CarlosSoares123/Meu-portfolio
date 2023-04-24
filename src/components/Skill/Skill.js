import styled from 'styled-components'

export const SkillContainer = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  gap: 15px;
  text-align: justify;
  
  @media (min-width: 768px){
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
  
`

export const skillText = styled.div``

export const skillContent =styled.div`
  width: 100%;
`
export const SkillBox = styled.div`
  width: 100%;
  margin: 25px 0;
`
export const title = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
`
export const skillBar = styled.div`
  height: 8px;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 6px;
  background-color: rgba(0, 0, 0, 0.1);
`
export const skillPer = styled.span`
  position: relative;
  display: block;
  height: 100%;
  width: 95%;
  border-radius: 6px;
  background-color: #7B4AE2;
  animation: progress 0.4s ease-in-out forwards;
  opacity: 0;

  &.css {
    width: 80%;
    animation-delay: 0.1s;
  }
  &.javascript {
    width: 60%;
    animation-delay: 0.2s;
  }
  &.react {
    width: 65%;
    animation-delay: 0.4s;
  }
  &.github{
    width: 40%;
    animation-delay: 0.4s;
  }

  @keyframes progress {
    0% {
      width: 0;
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`
export const tooltip = styled.span`
  position: absolute;
  right: -14px;
  top: -28px;
  font-size: 9px;
  font-weight: 500;
  color: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  background-color: #7B4AE2;

  &::before{
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2px;
    height: 10px;
    width: 10px;
    z-index: -1;
    background-color: #7B4AE2;
    transform: translateX(-50%) rotate(45deg);
  }
`
