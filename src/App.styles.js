import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial';
  }
  *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li { list-style: none; }
a{
  color: inherit;
  text-decoration: none;
}
a,
img,
input,
button,
ion-icon{
  display: block;
}

img { height: auto; }

input,
button {
  background: none;
  border: none;
  font: inherit;
  outline: none;
}

input{
  width: 100%;
}

button{
  cursor: pointer;
}

i{
  pointer-events: none;
}
address{
font-style: normal;
}

html{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 10px;
  scroll-behavior: smooth;
} 
body{
  background-color: var(--cor-bg-dark);
  font-size: var(--fonte-1);
  color:  var(--cor-texto);
  cursor: none;
}
section{
padding-top: 95px;
padding-inline: 15px;
}
:root{
  --cor-base: #7B4AE2;
  --cor-texto: rgba(255, 255, 255, 0.5);
  --cor-branca: #fff;
  --cor-preta: #000;

  //background
  --cor-bg-dark: #090E16;
  --cor-bg-dark-header: rgba(123, 74, 226, 0.05);
  --cor-bg-dark-navbar: rgba(123, 74, 226);

  --fonte-1: 1.75rem;

}


@media(min-width: 768px){
    section{
      padding-inline: 50px;
    }
  }
@media(min-width: 992px){
    section{
      padding-inline: 80px;
  }
}
@media(min-width: 1100px){
    section{
      padding-inline: 110px;
  }
}
`
export const Body = styled.div`

.cursor{
    position: fixed;
    width: 8px;
    height: 8px;
    border: 1px solid #c6c6c6;
    border-radius: 50%;
    left: 0;
    top: 0;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: .1s ease;
    z-index: 200;
  }
  .cursor2{
    position: fixed;
    width: 35px;
    height: 35px;
    border: 1px solid #c6c6c6;
    border-radius: 50%;
    left: 0;
    top: 0;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: .15s ease;
    z-index: 200;
  }

  @media (max-width: 1023px) {
  .cursor {
    display: none;
  }
  .cursor2 {
    display: none;
  }
}

  .botao-topo {
  display: none;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: var(--cor-base);
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 50%;
}

.botao-topo:hover {
  filter: brightness(1.4);
}

  

`
export const titulo1 = styled.h1`
  background-color:  rgba(123, 74, 226, 0.1);
  font-size: 16px;
  border-radius: 10px;
  width: max-content;
  padding: 5px;
  color: var(--cor-base);
` 
export const titulo2 = styled.h2`
  width: 100%;
  padding-bottom: 5px;
  color: var(--cor-branca);
`
export const ButaoPersonalizado =styled.button`
  width: max-content;
  font-weight: 600;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: var(--cor-base);
  transition: .4s ease;
  color: var(--cor-texto);

  &:hover{
    filter: brightness(1.2);
    color: var(--cor-branca);
  }
`



