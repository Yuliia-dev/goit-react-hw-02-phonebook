import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  FormContact,
  LabelFormContact,
  TextFormContact,
  InputFormContact,
  ButtonFormContact,
} from './PhonebookForm.styled';

export default class PhonebookForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  submitForm = e => {
    e.preventDefault();
    const id = nanoid();
    this.props.onSubmit({ id, ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <FormContact autoComplete="off" onSubmit={this.submitForm}>
          <LabelFormContact>
            <TextFormContact>Name</TextFormContact>
            <InputFormContact
              placeholder="Enter a name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelFormContact>
          <LabelFormContact>
            <TextFormContact>Number</TextFormContact>
            <InputFormContact
              placeholder="Enter a number"
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </LabelFormContact>
          <ButtonFormContact type="submit">Add contact</ButtonFormContact>
        </FormContact>
      </>
    );
  }
}
