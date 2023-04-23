import * as H from './Header'
import { BsList } from "react-icons/bs";
import { BsFillLaptopFill } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";



export const Header = ({onClick, onClose, menuAberto, handleClickLink}) => {


  
  return(
    <>
      <H.headerContainer>
        <H.headerLogo>
          <BsFillLaptopFill style={{color: 'var(--cor-branca)', fontSize: '30px'}}/>
        </H.headerLogo>

        <H.Nav className={menuAberto ? 'active' : ''}>
          
          <H.menuLateral>
            <a href="#">Carlos<BsFillLaptopFill style={{color: 'var(--cor-branca)', fontSize: '30px'}}/></a>
            <H.Butao onClick={onClose}>
              <BsXLg style={{color: 'var(--cor-branca)', fontSize: '20px'}}/>
            </H.Butao>
          </H.menuLateral>

          <ul>
            <H.Link>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={100}
              onClick={handleClickLink}
            >
              Home
            </Link>
            </H.Link>

            <H.Link>
            <Link
              activeClass="active"
              to="sobre"
              spy={true}
              smooth={true}
              duration={100}
              onClick={handleClickLink}
            >
              Sobre Mim
            </Link>
            </H.Link>

            <H.Link>
            <Link
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              duration={100}
              onClick={handleClickLink}
            >
              Skill
            </Link>
            </H.Link>

            <H.Link>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={100}
              onClick={handleClickLink}
            >
              Portfólio
            </Link>
            </H.Link>

            <H.Link>
            <Link
              activeClass="active"
              to="contacto"
              spy={true}
              smooth={true}
              duration={100}
              onClick={handleClickLink}
            >
              Contacto
            </Link>
            </H.Link>
          </ul>

        </H.Nav>

        <H.Butao onClick={onClick}>
          <BsList style={{color: 'var(--cor-branca)', fontSize: '30px'}}/>
        </H.Butao>

        <H.Overlay className={menuAberto ? 'active' : ''} onClick={handleClickLink}/>


      </H.headerContainer>
    </>
  )
}