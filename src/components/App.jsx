import ContactForm from './NewContactForm/NewContactForm';
import ContactsList from './ContactsList/ContactsList';

import FilterField from './ContactsFilter/ContactsFilter';

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <FilterField />
      <ContactsList />
    </>
  );
}

export default App;
