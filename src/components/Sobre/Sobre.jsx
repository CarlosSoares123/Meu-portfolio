import * as S from './Sobre'
import * as C from '../../App.styles'

export const Sobre = () => {
  return(
      <S.sobreContainer id='sobre'>
        
        <S.sobreTop>
          <S.imgProfile>
            <img src="#" alt="Imagem do autor" />
          </S.imgProfile>
        </S.sobreTop>

        <S.sobreBottom>
          <C.titulo1>👨🏾‍💻 Sobre mim</C.titulo1>
          <C.titulo2>Carlos C. A. Soares</C.titulo2>
          <p>
          Olá, meu nome é Carlos Soares e tenho 19 anos. Sou apaixonado por programação e estou estudando ativamente há cerca de 5 meses.
          Eu sou uma pessoa dedicada e comprometida com o meu trabalho. Estou sempre procurando novos desafios e oportunidades para aplicar minhas habilidades em projetos práticos. Meu maior interesse é em desenvolvimento web, mas estou disposto a trabalhar em outras áreas de programação também.
          Eu acredito que posso ser uma grande adição para qualquer equipe de programação. Sou motivado, criativo e trabalho bem sob pressão. Além disso, estou sempre procurando maneiras de melhorar e aprender mais.
          </p>
          <C.ButaoPersonalizado>
            Baixar CV
          </C.ButaoPersonalizado>
        </S.sobreBottom>

      </S.sobreContainer>
  )
}