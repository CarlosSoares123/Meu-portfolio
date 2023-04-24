import * as Sk from './Skill'
import * as C from '../../App.styles'

export const Skill = () => {
  return(
    <>
    <Sk.SkillContainer id='skill'>
      <C.titulo1>🤗 Skill</C.titulo1>
      <C.titulo2>Meu Nivel Tecnico</C.titulo2>
      <p>
      Sou um desenvolvedor web com habilidades sólidas em HTML, CSS e JavaScript. Com meu conhecimento mediano em React, sou capaz de criar designs atraentes e funcionais para projetos web, além de manipular rotas com o React Router e criar estilos personalizados com o styled-components
      <br />
      Estou sempre buscando aprender e melhorar minhas habilidades em programação, e estou animado para continuar a me aprimorar e expandir minhas habilidades. 
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