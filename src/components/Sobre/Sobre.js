import styled from 'styled-components'

export const sobreContainer = styled.section`
  width: 100%;
  height: auto;
  
  @media (min-width: 768px) {
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
  }
`

export const sobreTop = styled.div`
  width: 100%;
  height: 300px;
`

export const imgProfile = styled.figure`
  width: 100%;
  clip-path: circle();
  

  img{
    width: 250px;
    height: 250px;
  }
  @media (min-width: 768px){
    img{
      width: 280px;
      height: 280px;
    }
  }
  @media (min-width: 992px){
    img{
      width: 320px;
      height: 320px;
    }
  }
`

export const sobreBottom = styled.div`
  display: grid;
  gap: 15px;
p{
  text-align: left;
}
@media(min-width: 992px){
  p{
    text-align: left;
  }
}

`