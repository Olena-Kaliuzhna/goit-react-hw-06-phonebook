import PropTypes from 'prop-types';
import s from './ErrorPopup.module.css';

function ErrorPopup({ text }) {
  return (
    <div className={s.popup}>
      <h1>{text}</h1>
    </div>
  );
}

ErrorPopup.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorPopup;
