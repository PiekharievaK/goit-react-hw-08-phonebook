export const findContacts = (contacts , filterValue) => {

  if(contacts === []){
    return
  }
  const lowerValue = filterValue.toLowerCase();

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(lowerValue) ||
      contact.number.includes(lowerValue)
  );
  return filteredContacts;
};
