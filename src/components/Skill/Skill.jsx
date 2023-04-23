import * as Sk from './Skill'
import * as C from '../../App.styles'

export const Skill = () => {
  return(
    <>
    <Sk.SkillContainer id='skill'>
      <C.titulo1>🤗 Skill</C.titulo1>
      <C.titulo2>Meu Nivel Tecnico</C.titulo2>
      <p>
      Possuo habilidades sólidas em HTML e CSS, o que me permite criar designs atraentes 
      e funcionais para projetos web. Além disso, tenho um conhecimento mediano em JavaScript 
      puro, como funções, objetos, manipulação da DOM, condições e repetições.
      Também possuo um conhecimento mediano em React, uma das bibliotecas JavaScript mais populares 
      do mercado. Com essa habilidade, sou capaz de criar componentes, páginas de carregamento e 
      manipular rotas com o React Router. Além disso, sou capaz de usar os hooks do React, como o 
      useState e o useEffect, bem como o styled-components para criar estilos personalizados para 
      meus componentes.
      Estou sempre buscando aprender e melhorar minhas habilidades em programação, e estou animado 
      para continuar a me aprimorar e expandir minhas habilidades. 
      </p>
      
      <Sk.skillContent>
      <Sk.SkillBox>
        <Sk.skillBar>
        <Sk.title>Html</Sk.title>
          <Sk.skillPer className='html'>
            <Sk.tooltip>95%</Sk.tooltip>
          </Sk.skillPer>
        </Sk.skillBar>
      </Sk.SkillBox>

      <Sk.SkillBox>
        <Sk.title>CSS</Sk.title>
        <Sk.skillBar>
          <Sk.skillPer className='css'>
            <Sk.tooltip>80%</Sk.tooltip>
          </Sk.skillPer>
        </Sk.skillBar>
      </Sk.SkillBox>

      <Sk.SkillBox>
        <Sk.title>JavaScript</Sk.title>
        <Sk.skillBar>
          <Sk.skillPer className='javascript'>
            <Sk.tooltip>60%</Sk.tooltip>
          </Sk.skillPer>
        </Sk.skillBar>
      </Sk.SkillBox>

      <Sk.SkillBox>
        <Sk.title>React js</Sk.title>
        <Sk.skillBar>
          <Sk.skillPer className='react'>
            <Sk.tooltip>65%</Sk.tooltip>
          </Sk.skillPer>
        </Sk.skillBar>
      </Sk.SkillBox>
      </Sk.skillContent>
      

    </Sk.SkillContainer>
    </>
  )
}