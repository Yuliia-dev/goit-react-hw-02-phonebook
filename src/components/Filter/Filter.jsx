import PropTypes from 'prop-types';
import { LabelFilter, TextFilter, InputFilter } from './Filter.styled';

export default function Filter({ value, searchName }) {
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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  searchName: PropTypes.func.isRequired,
};
