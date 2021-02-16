import React from 'react';
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

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;
