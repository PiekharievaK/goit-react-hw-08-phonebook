import ContactForm from 'components/NewContactForm/NewContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import FilterField from 'components/ContactsFilter/ContactsFilter';

    
export default function ContactsPage() {
    return <>
    <ContactForm />
      <h2>Contacts</h2>
      <FilterField />
      <ContactsList />
    </> 
};
