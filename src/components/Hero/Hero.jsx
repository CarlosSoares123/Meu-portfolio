import * as He from './Hero'
import * as C from '../../App.styles'

import Avatar from '/AvatarAndIcons.svg'


export const Hero = () => {
  return(
    <He.heroContainer>
      <He.heroContentTop>
        
        <He.redeSocial>
          <a href='https://www.linkedin.com/feed/' target='_blank'>
        <He.IconLinkedin />
          </a>  
          <a href='https://github.com/CarlosSoares123' target='_blank'>
        <He.IconGithub />
          </a>
        </He.redeSocial >

        <He.avatarContainer>
          <img src={Avatar} alt="Avatar user" />
        </He.avatarContainer>
        
      </He.heroContentTop>

      <He.heroContentBottom>
        <C.titulo1>😁 Saudações!</C.titulo1>
        <h2>Carlos Soares</h2>
        <p>
          Oi, Seja Bem vindo ao meu Portfolio, aqui encontraram informações sobre mim, minhas habilidades e os meus projectos. 
          <br />
          <br />
          <span style={{fontWeight: '600'}}>
          Dev front End Jr
          </span>
        </p>

        
        <C.ButaoPersonalizado>
          Vamos conversar
        </C.ButaoPersonalizado>
      </He.heroContentBottom>
    </He.heroContainer>
  );
};

