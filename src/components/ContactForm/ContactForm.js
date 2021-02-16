import React, { Component } from 'react';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);

    this.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form className={s.wrapper} onSubmit={this.handleSubmit}>
          <label className={s.field}>
            <span className={s.name}>Name</span>
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              placeholder="Enter name"
              onChange={this.handleChangeInput}
              required
            />
          </label>
          <label className={s.field}>
            <span className={s.number}>Number</span>
            <input
              className={s.input}
              type="tel"
              name="number"
              value={number}
              placeholder="Enter number"
              onChange={this.handleChangeInput}
              required
            />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  onAddContact: (name, number) =>
    dispatch(phoneBookActions.addContact(name, number)),
});
ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(ContactForm);
