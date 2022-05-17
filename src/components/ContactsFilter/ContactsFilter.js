import s from './ContactsFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changesFilter } from 'redux/contacts/contactsReducer';

function FilterField() {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(changesFilter(e.target.value));
  };

  const value = useSelector(state => state.filter);

  return (
    <label className={s.label}>
      <span>Find contacts by name or number</span>
      <input
        type="text"
        name="findField"
        className={s.input}
        value={value}
        onChange={changeFilter}
      />
    </label>
  );
}

export default FilterField;
