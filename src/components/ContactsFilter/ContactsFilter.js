import s from './ContactsFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'redux/store';

function FilterField() {
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filter(e.target.value));
  };

  const value = useSelector(state => state.contacts.filter);

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
