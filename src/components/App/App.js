import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm.js';
import Filter from '../Filter/Filter.js';
import ContactList from '../ContactList/ContactList.js';
import PropTypes from 'prop-types';
import s from './App.module.css';
import anim from '../animation.module.css';
import filterAnim from '../Filter/Filter.module.css';

function App({ contacts }) {
  return (
    <div className={s.container}>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={s}
        unmountOnExit
      >
        {<h1 className={s.title}>Phonebook</h1>}
      </CSSTransition>

      <ContactForm />

      <CSSTransition
        in={contacts.length > 1}
        classNames={filterAnim}
        timeout={250}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      <CSSTransition
        in={contacts.length > 0}
        appear={true}
        timeout={250}
        classNames={anim}
        unmountOnExit
      >
        <div>
          <h2 className={s.title}>Contacts</h2>
          <ContactList />
        </div>
      </CSSTransition>
    </div>
  );
}
const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
};
export default connect(mapStateToProps, null)(App);
