import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts/contactsApi';
import { optimizePhone } from 'helpers/optimizePhone';
import s from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { findContacts } from 'helpers/filter';

const ContactsList = () => {
  
  const { data, isLoading, isError, error } = useGetContactsQuery();
  
  const contactsFilter = useSelector(state => state.filter);

  
  const [deleteContacts] = useDeleteContactMutation();


  if (isLoading) {
    return <h2>Loading...</h2>;
  }
if (data === undefined){return <p>text</p>}
  const contacts = findContacts(data, contactsFilter);
  if (contacts.length === 0 || data ===undefined || (isError && error.status === 404)) {
    return <h2>Please Add Contacts</h2>;
  }
  return (
    <ul className={s.list}>
      {contacts.map(element => {
        return (
          <li key={element.id} className={s.item}>
            <span className={s.contact}>
              <span className={s.name}>{element.name}:</span>
              <span className={s.phone}> {
              optimizePhone(
                element.number
                )
                }</span>
            </span>
            <span className={s.buttonsBox}>
              <button
                id={element.id}
                className={s.button}
                onClick={() => deleteContacts(element.id)}
              >
               Delete
              </button>
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
