import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import s from './Contact.module.css';
import anim from '../animation.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <TransitionGroup component="ul" className={s.wrapper}>
      {contacts.map(({ id, name, number }) => {
        return (
          <CSSTransition timeout={250} classNames={anim} key={id}>
            <ContactListItem
              appear={true}
              name={name}
              number={number}
              unmountOnExit
              onDelete={() => onDeleteContact(id)}
            />
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const getFilteredContacts = (allContacts, filter) => {
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
const mapStateToProps = ({ contacts: { items, filter } }) => {
  return {
    contacts: getFilteredContacts(items, filter),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phoneBookActions.deleteContact(id)),
});
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
