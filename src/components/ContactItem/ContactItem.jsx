import { useDispatch } from 'react-redux';
import actionCreators from 'redux/contacts/contactsActions';
const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;

  const dispatch = useDispatch();
  const handleChange = id => {
    dispatch(actionCreators.removeContact(id));
  };

  return (
    <li>
      {name}: {number}{' '}
      <button type="button" onClick={e => handleChange(id)}>
        Delete
      </button>
    </li>
  );
};
export default ContactItem;
