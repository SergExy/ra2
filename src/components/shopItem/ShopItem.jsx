import PropTypes from 'prop-types';

import './shopItem.scss';

const ShopItem = ({ item }) => {
  return (
    <div className='shopItem'>
      <div className='shopItem__img'>
        <img src={item.img} alt={item.name} />
      </div>
      <div className='shopItem__name'>{item.name}</div>
      <div className='shopItem__color'>{item.color}</div>
      <div className='shopItem__price'>${item.price}</div>
      <button className='shopItem__addBtn'>Add to cart</button>
    </div>
  )
}

ShopItem.propTypes = {
  item: PropTypes.object
}

export default ShopItem;