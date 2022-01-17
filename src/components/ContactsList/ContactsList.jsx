import PropTypes from 'prop-types';
import {
  ContactsList,
  ContactsItem,
  ContactsItemText,
  ContactsBtn,
} from './ContactsList.styled';

export default function Contacts({ contacts, deleteContact }) {
  return (
    <>
      <ContactsList>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              <ContactsItemText>
                {name}: {number}
              </ContactsItemText>{' '}
              <ContactsBtn onClick={() => deleteContact(id)}>
                Delete
              </ContactsBtn>
            </ContactsItem>
          );
        })}
      </ContactsList>
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};
