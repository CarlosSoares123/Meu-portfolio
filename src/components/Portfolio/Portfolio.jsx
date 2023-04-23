import * as P from './Portfolio'
import * as C from '../../App.styles'


export const Portfolio = ({children}) => {
  return (
    <P.portfolioContainer id='portfolio'>
      <C.titulo1>Portfolio</C.titulo1>
      <C.titulo2>Meus melhores Projecto de momento</C.titulo2>
      {children}
    </P.portfolioContainer>
  )
}
