import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm.js';
import Filter from '../Filter/Filter.js';
import ContactList from '../ContactList/ContactList.js';
import ErrorPopup from '../ErrorPopup/ErrorPopup';
import s from './App.module.css';
import anim from '../animation.module.css';
import filterAnim from '../Filter/Filter.module.css';

class App extends Component {
  state = {
    // contacts: [],
    // filter: '',
    error: false,
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevState) {
  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }

  // handleAddContact = (name, number) => {
  //   const { contacts } = this.state;
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };

  //   if (contacts.some(contact => contact.name === name)) {
  //     this.setState({ error: true });
  //     setTimeout(() => {
  //       this.setState({ error: false });
  //     }, 3000);
  //     return;
  //   }

  //   this.setState(prevState => {
  //     return { contacts: [...prevState.contacts, contact] };
  //   });
  // };

  render() {
    // const { filter, contacts } = state;
    // const visibleContacts = this.getFilteredContacts();

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

        {/* <CSSTransition
          in={contacts.length > 1}
          classNames={filterAnim}
          timeout={250}
          unmountOnExit
        >
          <Filter value={filter} onChangeFilter={this.handleFilterChange} />
        </CSSTransition> */}
        <Filter />
        {/* <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames={anim}
          unmountOnExit
        >
          <div>
            <h2 className={s.title}>Contacts</h2>
            <ContactList />
          </div>
        </CSSTransition> */}
        <ContactList />
        <CSSTransition
          in={this.state.error}
          timeout={250}
          classNames={anim}
          unmountOnExit
        >
          <ErrorPopup text="Этот контакт уже существует" />
        </CSSTransition>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contacts: state.contacts,
  // todos: getVisibleTodos(items, filter),
});
export default connect(mapStateToProps, null)(App);
