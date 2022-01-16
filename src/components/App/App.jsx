import { Component } from 'react';
import Swal from 'sweetalert2';
import PhonebookForm from '../PhonebookForm/PhonebookForm';
import Filter from '../Filter/Filter';
import Contacts from '../ContactsList/ContactsList';
import initContacts from './contacts.json';
import { Container, TitlePhonebook, TitleContacts } from './App.styled';

export default class App extends Component {
  state = {
    contacts: initContacts,
    filter: '',
  };

  onSubmitHandling = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };
    const normalizedNameContact = name.toLowerCase();

    this.checkForCopyingContact(normalizedNameContact)
      ? Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: `The name ${name} is already in the list`,
        })
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  checkForCopyingContact = name => {
    const { contacts } = this.state;
    return contacts.find(contact => contact.name.toLowerCase() === name);
  };

  searchNameOnList = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  delateContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  visibleContact = () => {
    const { contacts } = this.state;
    const normalizeFilter = this.state.filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  };

  render() {
    return (
      <Container>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <PhonebookForm onSubmit={this.onSubmitHandling} />

        <TitleContacts>Contacts</TitleContacts>
        <Filter value={this.state.filter} searchName={this.searchNameOnList} />
        <Contacts
          deleteContact={this.delateContact}
          contacts={this.visibleContact()}
        />
      </Container>
    );
  }
}
