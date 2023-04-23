import styled from 'styled-components';

export const filterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  .filter{
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 5px;
  }
  .ver{
    width: fit-content;
    background-color: #fff;
    
  }
`
export const buttonFilter = styled.button`
  border-radius:8px;
  border: 2px solid #7B4AE2;
  padding: 3px;
  color: #fff;
  font-size: 18px;
  transition: .4s ease-out;

  &:hover,
  &:focus{
    color: #000;
    background-color: #7B4AE2;
  }
`
export const figureImg = styled.figure`
  width: 100%;
  height: auto;
  
  
`
export const cardContainer = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    gap: 25px; 


@media(min-width: 768px){
  grid-template-columns: 1fr 1fr;
  
}
@media(min-width: 1100px){
  grid-template-columns: 1fr 1fr 1fr;
}

`
export const card = styled.div`
  width: 100%;
  height: auto;
  padding: 5px;
  border: 1px solid #7B4AE2;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  .cardText {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(0deg, rgba(137, 43, 226, 4), rgba(0, 0, 0, 0.5));
    color: #fff;
    border-radius: 10px;
    display: grid;
    place-content: center;
    text-align: center;
    transform: translateY(-100%);
    transition: all 0.4s;
    visibility: hidden;
  }
  
  a{
    padding: 10px;
    background-color: #fff;
    clip-path: circle();
    display: grid;
    place-items: center;
  }
  img{
    width: 100%;
    transition: .4 ease-in-out;
  }
  &:hover img{
    transform: scale(1.3);
  }
  &:hover .cardText,
  &:focus .cardText {
    transform: translateY(0);
    visibility: visible;
  }
`;

export const ver = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-content: center;
  

  button{
    border-radius:8px;
  border: 2px solid #7B4AE2;
  padding: 3px;
  color: #fff;
  font-size: 18px;
  }
`