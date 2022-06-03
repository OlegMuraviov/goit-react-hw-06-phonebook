import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from 'redux/contacts/contactsActions';
import { getContacts } from 'redux/contacts/contactsSelector';

const Phonebook = () => {
  const [form, setForm] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const data = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const searchedName = form.name.toLowerCase();

    if (data.some(element => element.name.toLowerCase() === searchedName)) {
      return alert(`${form.name} is already in contacts.`);
    }
    dispatch(actionCreators.addContact(form));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={form.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          value={form.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default Phonebook;
