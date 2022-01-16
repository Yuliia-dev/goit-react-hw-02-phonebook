import { Component } from 'react';
import PropTypes from 'prop-types';
import { LabelFilter, TextFilter, InputFilter } from './Filter.styled';

export default class Contacts extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    searchName: PropTypes.func.isRequired,
  };
  render() {
    const { value, searchName } = this.props;
    return (
      <LabelFilter>
        <TextFilter>Find contact by name</TextFilter>
        <InputFilter
          placeholder="Enter a name"
          type="text"
          name={value}
          onChange={searchName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </LabelFilter>
    );
  }
}
