import { useState } from 'react';
import './store.css';

import products from './products';

import IconSwitch from '../iconSwitch/IconSwitch';
import CardsView from '../cardsView/CardsView';
import ListView from '../listView/ListView';

const Store = () => {
  const [icon, setIcon] = useState('view_list');

  const handleIcon = () => {
    setIcon(icon === 'view_list' ? 'view_module' : 'view_list');
  }
  return (
    <div className='store'>
      <IconSwitch
        icon={icon}
        switchIcon={handleIcon}
      />

      {icon === 'view_list' ? (
        <ListView
          items={products}
        />
      ) : (
        <CardsView
          cards={products}
        />
      )}

    </div>
  )
}

export default Store;