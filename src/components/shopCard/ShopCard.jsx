import PropTypes from 'prop-types';

import './shopCard.scss';

const ShopCard = ({ card }) => {
  return (
    <div className='shopCard'>
      <div className='shopCard__name'>{card.name}</div>
      <div className='shopCard__color'>{card.color}</div>
      <div className='shopCard__img'>
        <img src={card.img} alt={card.name} />
      </div>
      <div className='shopCard__add'>
        <div className='shopCard__price'>${card.price}</div>
        <button className='shopCard__addBtn'>Add to cart</button>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  card: PropTypes.object
}

export default ShopCard;