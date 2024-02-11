import PropTypes from 'prop-types';

import './iconSwitch.scss';

const IconSwitch = ({ icon, switchIcon }) => {
  return (
    <div className='iconSwitch'>
      <button className='iconSwitch__btn'>
        <span className='material-icons' onClick={switchIcon}>
          {icon}
        </span>
      </button>
    </div>
  )
};

IconSwitch.propTypes = {
  icon: PropTypes.string,
  switchIcon: PropTypes.func
}

export default IconSwitch;