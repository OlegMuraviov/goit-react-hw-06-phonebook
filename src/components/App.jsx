import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

const App = () => {
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

  return (
    <div>
      <Section>
        <Phonebook />
        <h3>Contacts</h3>
        <Filter />
        <ContactsList />
      </Section>
    </div>
  );
};

export default App;
