import PropTypes from 'prop-types';
import ShopCard from '../shopCard/ShopCard';

import './cardsView.scss';

const CardsView = ({ cards }) => {
  return (
    <div className='cardsView'>
      {cards.map((card, i) => (
          <ShopCard
            card={card}
            key={i}
          />
        ))}
    </div>
  )
};

CardsView.propTypes = {
  cards: PropTypes.array,
}

export default CardsView;