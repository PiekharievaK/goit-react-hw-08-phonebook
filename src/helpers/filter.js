export const findContacts = (contacts, filterValue) => {
  const lowerValue = filterValue.toLowerCase();
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(lowerValue) ||
      contact.phone.includes(lowerValue)
  );
  return filteredContacts;
};
