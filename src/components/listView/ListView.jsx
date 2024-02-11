import PropTypes from 'prop-types';
import ShopItem from '../shopItem/ShopItem';

const ListView = ({ items }) => {
  return (
    <div className='listView'>
      {items.map((item, i) => (
        <ShopItem
          item={item}
          key={i}
        />
      ))}
    </div >
  )
}

ListView.propTypes = {
  items: PropTypes.array
}

export default ListView;