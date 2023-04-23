import * as F from './Filter'
import * as C from '../../App.styles'
import { btns, images } from '../Portfolio/BdPortfolio'
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useState } from 'react';

export const Filter = () => {
  const [active, setActive] = useState(false);
  const [filterImages, setFilterImages] = useState(images);
  const [cardsToShow, setCardsToShow] = useState(6);

  const handleClick = (e) => {
    let btnType = e.target.value
    setActive(btnType)
    const newFilterImages = images.filter((item) => item.categoria === btnType)
    btnType === "all" ? setFilterImages(images) : setFilterImages(newFilterImages)
  }

  const handleShowLess = () => {
    if (cardsToShow > 6) {
      setCardsToShow(cardsToShow - 3);
    }
  }

  return (
    <F.filterContainer>

      <div className='filter'>
        {btns.map((item, id) => {
          const {name, value} = item
          return (
            <F.buttonFilter 
              onClick={handleClick}
              key={id} 
              value={value}
              className={active === value ? 'active' : ''}
            >
              {name}
            </F.buttonFilter>
          )
        })}
      </div>
      
      <F.cardContainer>
        {filterImages && filterImages.slice(0, cardsToShow).map((item, id) => {
          const { img } = item;
          return( 
            <F.card key={id}>
              <F.figureImg>
                <img src={img} alt="" />
              </F.figureImg>
            
              <div className='cardText'>
                <h2>{item.name}</h2>
                <p>{item.descricao}</p>
                <button>
                  <a href={item.site}>
                    <BsBoxArrowUpRight/>
                  </a>
                </button>
              </div>
            </F.card>
          )
        })}
      </F.cardContainer>
      
      {filterImages && cardsToShow < filterImages.length && (
        <F.ver>
          <C.ButaoPersonalizado onClick={() => setCardsToShow(cardsToShow + 3)}>Ver mais</C.ButaoPersonalizado>
        </F.ver>
      )}

      {cardsToShow > 6 && (
        <F.ver>
          <C.ButaoPersonalizado onClick={handleShowLess}>Ver menos</C.ButaoPersonalizado>
        </F.ver>
      )}
      
    </F.filterContainer>
  )
}
