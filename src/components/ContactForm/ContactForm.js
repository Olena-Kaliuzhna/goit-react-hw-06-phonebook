import React, { Component } from 'react';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import anim from '../animation.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    error: false,
    errorMessage: '',
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
    const contacts = this.props.contacts;

    if (contacts.some(contact => contact.name === name)) {
      this.setState({
        error: true,
        errorMessage: 'Этот контакт уже существует',
      });
      setTimeout(() => {
        this.setState({ error: false });
      }, 3000);
      this.reset();
      return;
    }

    this.props.onAddContact(name, number);
    this.reset();
  };

  render() {
    const { name, number, errorMessage } = this.state;

    return (
      <div>
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
        <CSSTransition
          in={this.state.error}
          timeout={250}
          classNames={anim}
          unmountOnExit
        >
          <ErrorPopup text={errorMessage} />
        </CSSTransition>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onAddContact: (name, number) =>
    dispatch(phoneBookActions.addContact(name, number)),
});

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onAddContact: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
