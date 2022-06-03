import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

const App = () => {
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
