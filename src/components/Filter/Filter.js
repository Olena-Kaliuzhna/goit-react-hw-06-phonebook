import React from 'react';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    <div className={s.wrapper}>
      <label className={s.field}>
        <span className={s.label}>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          name="filter"
          value={value}
          placeholder="Enter to find"
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
}
const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event =>
    dispatch(phoneBookActions.changeFilter(event.currentTarget.value)),
});

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
