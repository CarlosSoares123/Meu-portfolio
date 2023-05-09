import styled from 'styled-components'


export const headerContainer = styled.header`
  width: 100%;
  display: flex;
  padding: 20px 2rem;
  justify-content: space-between;
  align-items: center;

  background: var(--cor-bg-dark-header);
  

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  @media (min-width: 768px) {
    padding-inline: 5.4rem;
  }
  @media (min-width: 992px) {
    padding: 20px;
    padding-inline: 6.6rem;
  }
  @media (min-width: 992px) {
    padding-inline: 11rem;
  }
`

export const headerLogo = styled.div`
  font-size: 1.5rem;
  
`
//Nav-Bar
export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: -300px;
  width: 100%;
  max-width: 280px;
  height: 100%;
  background-color: var(--cor-bg-dark-navbar);
  color: var(--cor-branca);
  padding: 30px 20px;
  transition: 0.25s ease;
  z-index: 4;
  &.active {
    left: 0;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (min-width: 992px) {
    all: unset; // desfaz e mostra os link que estavam guardados
    &.active {
      all: unset; // desfaz e mostra os link que estavam guardados
    }

    ul {
      display: flex;
      flex-direction: row;
      gap: 40px;
    }
  }
`
export const menuLateral = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    gap: 10px;
  }

  @media (min-width: 992px) {
    display: none;
  }
`
export const Link = styled.li`
  color: var(--cor-branca);
  cursor: pointer;
  &:hover {
    color: black;
    @media (min-width: 992px) {
      color:  var(--cor-texto);
      &:hover{
        color: rgba(123, 74, 226, 0.5);
      }
    }
  }
`
export const Butao = styled.button`
  font-size: 30px;

  @media (min-width: 992px) {
    display: none;
  }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: hsla(0, 0%, 100%, 0.3);
  transition: opacity 0.3s ease-in-out, visibility 0s linear 0.3s;
  visibility: hidden;
  opacity: 0;
  z-index: 3;
  &.active {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease-in-out;
  }

  @media (min-width: 992px) {
    display: none;
  }
`
