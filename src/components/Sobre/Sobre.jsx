import * as S from './Sobre'
import * as C from '../../App.styles'


export const Sobre = () => {
  return(
      <S.sobreContainer id='sobre'>
        
        <S.sobreTop>
          <S.imgProfile>
            <img src="/user.jpg" alt="Imagem do autor" />
          </S.imgProfile>
        </S.sobreTop>

        <S.sobreBottom>
          <C.titulo1>👨🏾‍💻 Sobre mim</C.titulo1>
          <C.titulo2>Carlos C. A. Soares</C.titulo2>
          <p>
          Olá, meu nome é Carlos Soares e tenho 19 anos. Sou apaixonado por programação e tenho me dedicado ativamente aos estudos há cerca de 5 meses.
          <br />
          Sou uma pessoa comprometida com o meu trabalho e estou sempre em busca de novos desafios e oportunidades para aplicar minhas habilidades em projetos práticos. Meu principal interesse é em desenvolvimento web, embora esteja aberto a trabalhar em outras áreas da programação.
          <br />
          Acredito que posso ser uma grande adição para qualquer equipe de programação, pois sou motivado, criativo e trabalho bem sob pressão. Além disso, estou sempre procurando maneiras de melhorar e aprender mais.
          </p>
          <C.ButaoPersonalizado>
            Baixar CV
          </C.ButaoPersonalizado>
        </S.sobreBottom>

      </S.sobreContainer>
  )
}