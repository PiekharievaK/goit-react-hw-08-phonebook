import PropTypes from 'prop-types';
import { Report } from 'notiflix';
import s from './NewContactForm.module.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAddContactsMutation } from 'contactsAPI/contactsAPI';

function ContactForm(props) {
  const [state, setState] = useState({ name: '', phone: '' });
  const names = useSelector(state => state.contacts.filter);

  const [addContact] = useAddContactsMutation();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const number = e.target.elements.phone.value;

    if (names.includes(name.toLowerCase())) {
      Report.warning(
        `'${name}' is already in contacts `,
        `Please change name to create unique contact`,
        'Okay',
        {
          titleMaxLength: 1000,
        }
      );
      return;
    }
    addContact({ name: name, phone: number });

    reset();
  };

  const reset = () => {
    state.name = '';
    state.phone = '';
  };

  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    setState(prevState => ({ ...prevState, [key]: value }));
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          className={s.input}
          onChange={handleChange}
          value={state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Enter name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        <span>Number</span>
        <input
          type="tel"
          name="phone"
          className={s.input}
          onChange={handleChange}
          value={state.phone}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number,
};

export default ContactForm;
