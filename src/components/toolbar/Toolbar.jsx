import PropTypes from 'prop-types';

import './toolbar.scss'

const Toolbar = ({
  filters,
  selected,
  onSelectFilter
}) => {
  return (
    <div className='toolbar'>
      {filters.map((filter, i) => (
        <button
          className={`toolbar__btn ${filter === selected && 'toolbar__btn_active'}`}
          key={i}
          onClick={onSelectFilter}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func
}

export default Toolbar;