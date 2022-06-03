import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contactsSelector';

const ContactsList = () => {
  const data = useSelector(getFilteredContacts);

  return (
    <div>
      <ul>
        {data.map(contact => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
      </ul>
    </div>
  );
};
export default ContactsList;
