import * as C from './App.styles'
import { useState, useEffect } from 'react'
import { Header } from './components/Header/Header.jsx'
import { Hero } from './components/Hero/Hero.jsx'
import { Sobre } from './components/Sobre/Sobre.jsx'
import { Skill } from './components/Skill/Skill.jsx'
import { Portfolio } from './components/Portfolio/Portfolio.jsx'
import { Filter } from './components/Filter/Filter.jsx'
import { Form } from './components/Form/Form.jsx'
import { Footer } from './components/Footer/Footer.jsx'


import { BsArrowUp } from "react-icons/bs";




function App() {

  const [menuAberto, setMenuAberto] = useState(false)
  const abrirMenu = () => {
    setMenuAberto(true)
  }
  const fecharMenu = () => {
    setMenuAberto(false)
  }
  const handleClickLink = () => {
    setMenuAberto(false)
  }

  const [position, setPosition] = useState({ x: -100, y: -100 });  
  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    document.addEventListener("mousemove", onMouseMove);
    
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
  


  return (

    <C.Body >

    <div>
    <div className="cursor2" style={{ left: `${position.x}px`, top: `${position.y}px` }} />
      <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }} />
    </div>
      <C.GlobalStyle/>

      <Header onClick={abrirMenu} onClose={fecharMenu} menuAberto={menuAberto} handleClickLink={handleClickLink}/>

      <Hero/>

      <Sobre />

      <Skill/>
      
      <Portfolio >
        <Filter/>
      </Portfolio>

      <Form />

      <Footer/>

      <button className="botao-topo" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}>
      <BsArrowUp/>
    </button>

    </C.Body>
  )
}

export default App
